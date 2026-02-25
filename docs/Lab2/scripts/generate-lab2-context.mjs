import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('docs/Lab2/context');
const generatedRoot = path.join(root, 'generated');
const seedRoot = path.join(root, 'seed');
const statsFile = path.resolve('docs/Lab2/context/generation-stats.json');

function createRng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

const rng = createRng(20260226);

function pickOne(items) {
  return items[Math.floor(rng() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const artifactTypes = [
  { key: 'customer-interviews', label: 'Customer Interview', count: 150, targetChars: 8000 },
  { key: 'support-tickets', label: 'Support Ticket', count: 500, targetChars: 1500 },
  { key: 'sales-call-notes', label: 'Sales Call Note', count: 150, targetChars: 2200 },
  { key: 'nps-survey-responses', label: 'NPS Survey Response', count: 400, targetChars: 1100 },
  { key: 'feature-requests', label: 'Feature Request', count: 200, targetChars: 1300 },
  { key: 'community-forum-posts', label: 'Community Forum Post', count: 100, targetChars: 3200 },
  { key: 'cs-qbr-notes', label: 'CS QBR Note', count: 80, targetChars: 4200 },
  { key: 'churn-exit-interviews', label: 'Churn Exit Interview', count: 80, targetChars: 5200 },
  { key: 'internal-meeting-notes', label: 'Internal Meeting Note', count: 80, targetChars: 2600 },
  { key: 'cab-session-transcripts', label: 'CAB Session Transcript', count: 40, targetChars: 6200 },
];

const needs = [
  { id: 1, key: 'rbac', label: 'Role-Based Access Control', targetMentions: 52, segments: ['Enterprise Admin', 'PMO Lead'] },
  { id: 2, key: 'readonly', label: 'Read-Only Stakeholder Access', targetMentions: 48, segments: ['Executive Sponsor', 'Finance Reviewer'] },
  { id: 3, key: 'audit-trail', label: 'Audit Trail', targetMentions: 45, segments: ['Security Lead', 'Compliance Manager'] },
  { id: 4, key: 'export', label: 'Data Export', targetMentions: 40, segments: ['Operations Analyst', 'Program Office'] },
  { id: 5, key: 'sso-saml', label: 'SSO / SAML Integration', targetMentions: 38, segments: ['IT Admin', 'Identity Team'] },
  { id: 6, key: 'workspace-segmentation', label: 'Workspace Segmentation', targetMentions: 36, segments: ['Portfolio Manager', 'Regional PMO'] },
  { id: 7, key: 'notification-control', label: 'Notification Control', targetMentions: 34, segments: ['Product Ops', 'Team Lead'] },
  { id: 8, key: 'api', label: 'API Access for Integrations', targetMentions: 32, segments: ['Platform Engineer', 'RevOps Engineer'] },
  { id: 9, key: 'custom-fields', label: 'Custom Fields', targetMentions: 30, segments: ['Process Owner', 'Implementation Manager'] },
  { id: 10, key: 'reporting', label: 'Reporting and Dashboards', targetMentions: 28, segments: ['VP Product', 'Portfolio Director'] },
  { id: 11, key: 'approval-workflows', label: 'Approval Workflows', targetMentions: 14, segments: ['Governance Lead', 'Change Board'] },
  { id: 12, key: 'guest-access', label: 'Guest or External Access', targetMentions: 13, segments: ['Partner Manager', 'Customer Advisory Group'] },
  { id: 13, key: 'bulk-operations', label: 'Bulk Operations', targetMentions: 12, segments: ['Admin Power User', 'Data Steward'] },
  { id: 14, key: 'template-library', label: 'Template Library', targetMentions: 11, segments: ['PMO Coach', 'Ops Program Manager'] },
  { id: 15, key: 'mobile', label: 'Mobile Access', targetMentions: 10, segments: ['Field PM', 'Exec Approver'] },
  { id: 16, key: 'data-residency', label: 'Data Residency', targetMentions: 4, segments: ['APAC Security', 'Regional Legal'] },
  { id: 17, key: 'compliance-certs', label: 'Compliance Certification (SOC2 / ISO27001)', targetMentions: 4, segments: ['Risk Officer', 'Procurement Security'] },
  { id: 18, key: 'offline', label: 'Offline Access', targetMentions: 4, segments: ['Traveling PM', 'Field Ops'] },
  { id: 19, key: 'multilanguage', label: 'Multi-Language Support', targetMentions: 4, segments: ['APAC PMO', 'Regional Onboarding'] },
  { id: 20, key: 'rollback', label: 'Version History and Rollback', targetMentions: 5, segments: ['Program Manager', 'Audit Reviewer'] },
];

const needExpressions = {
  rbac: [
    'We need granular roles beyond owner and member to prevent accidental edits.',
    'Permission granularity is too coarse; every team asks for scoped edit rights.',
    'Access control must separate configuration rights from execution rights.'
  ],
  readonly: [
    'Executives need read-only access so they can review plans without changing them.',
    'PMO reviewers want visibility without edit capability.',
    'Stakeholders keep requesting a strict view-only mode.'
  ],
  'audit-trail': [
    'Security asked for a complete record of who changed roadmap fields and when.',
    'Teams need immutable change history to satisfy audit requests.',
    'Lack of traceability is blocking internal controls reviews.'
  ],
  export: [
    'Customers need to export roadmap, status, and log data to downstream reporting tools.',
    'Data extraction for audits is currently manual and painful.',
    'Program teams requested scheduled exports for portfolio review packs.'
  ],
  'sso-saml': [
    'Identity teams require SSO and SAML before any enterprise rollout.',
    'IT security policy blocks adoption without centralized authentication.',
    'Single sign-on integration is a procurement gate for larger accounts.'
  ],
  'workspace-segmentation': [
    'Business units need isolated workspaces with separate admin boundaries.',
    'Portfolio governance requires strict separation between teams and clients.',
    'Shared space creates cross-team leakage and ownership confusion.'
  ],
  'notification-control': [
    'Users report notification overload and need channel-level controls.',
    'Some teams miss critical updates while others receive too much noise.',
    'Notification preferences must support role-based defaults.'
  ],
  api: [
    'Integration teams need API access for syncing roadmap and planning data.',
    'Manual imports are failing; they require reliable API endpoints.',
    'Admins asked for APIs to automate project lifecycle updates.'
  ],
  'custom-fields': [
    'Teams cannot model their delivery process without configurable custom fields.',
    'Implementation projects require extra metadata dimensions per item.',
    'Customers want field-level flexibility for governance tags.'
  ],
  reporting: [
    'Leadership needs dashboards across portfolios to track commitments and risk.',
    'Current reporting does not provide a consolidated executive view.',
    'Quarterly planning reviews require drill-down analytics.'
  ],
  'approval-workflows': [
    'Change boards want formal approval gates before roadmap status changes.',
    'Governance requires multi-step signoff for high-impact edits.',
    'Teams requested configurable approval chains for release decisions.'
  ],
  'guest-access': [
    'Accounts need controlled guest access for external partners.',
    'Program leads must share roadmaps with clients without full accounts.',
    'External collaboration is blocked by all-or-nothing user provisioning.'
  ],
  'bulk-operations': [
    'Admins need bulk update and bulk archive actions for large backlogs.',
    'Operational cleanup is too slow without batch operations.',
    'Portfolio migration requires multi-record edits in one action.'
  ],
  'template-library': [
    'PMO requested reusable templates for intake and roadmap setup.',
    'Teams want standardized templates to reduce setup variance.',
    'New workspace onboarding is slow without template defaults.'
  ],
  mobile: [
    'Approvers want to review and approve roadmap changes from mobile.',
    'Field leaders need lightweight mobile access during travel.',
    'Mobile review workflow is a frequent executive request.'
  ],
  'data-residency': [
    'APAC security teams require customer data to stay in-region.',
    'Regional legal review flagged strict data residency requirements.',
    'Procurement in APAC requires region-specific hosting controls.'
  ],
  'compliance-certs': [
    'Risk teams asked for active SOC2 and ISO27001 certification evidence.',
    'Procurement checklist blocks deals without formal certifications.',
    'Churn feedback cited missing compliance credentials as a deal-breaker.'
  ],
  offline: [
    'Field teams asked for offline access while traveling in low-connectivity regions.',
    'Mobile and desktop users need read/write caching for flight-mode use.',
    'Unreliable connectivity is causing work stoppages in remote sites.'
  ],
  multilanguage: [
    'APAC teams need localized interface strings for onboarding and adoption.',
    'Regional rollout requires multilingual support for core workflows.',
    'English-only UX is slowing deployment in non-English business units.'
  ],
  rollback: [
    'Program owners want version history with one-click rollback after accidental edits.',
    'Audit reviewers require recoverable snapshots of roadmap states.',
    'Teams need item-level change history to restore previous plans.'
  ],
};

const noiseSnippets = [
  'Team praised the onboarding flow and highlighted fast setup as a major win.',
  'Stakeholders liked the visual roadmap and asked for more examples in docs.',
  'No critical blockers were raised in this interaction; sentiment was positive.',
  'Most comments focused on training cadence and workshop scheduling details.',
  'User feedback emphasized responsive support and smoother implementation than expected.',
  'Participants requested more webinars and certification tracks for admins.',
  'Discussion centered on pricing communication and renewal process transparency.',
  'Several attendees shared general appreciation for weekly product updates.'
];

const adjacentPainSnippets = [
  'Teams want clearer onboarding milestones for new workspace launches.',
  'Several users asked for improved in-app glossary and terminology guidance.',
  'Participants requested better import validation messaging for CSV uploads.',
  'Multiple accounts raised concerns about duplicate item handling during migration.',
  'Users want stronger contextual help for first-time configuration steps.'
];

const typeMetadata = {
  'customer-interviews': { participants: ['Product Manager', 'PMO Director', 'Program Lead'] },
  'support-tickets': { participants: ['Support Engineer', 'Workspace Admin', 'End User'] },
  'sales-call-notes': { participants: ['Account Executive', 'Solutions Engineer', 'Prospect Champion'] },
  'nps-survey-responses': { participants: ['Customer Respondent', 'NPS Analyst', 'Success Manager'] },
  'feature-requests': { participants: ['Customer Admin', 'Success Partner', 'Product Ops'] },
  'community-forum-posts': { participants: ['Community Moderator', 'Contributor', 'PM Team'] },
  'cs-qbr-notes': { participants: ['CSM', 'Customer Sponsor', 'Ops Manager'] },
  'churn-exit-interviews': { participants: ['Exit Interviewer', 'Former Admin', 'Decision Maker'] },
  'internal-meeting-notes': { participants: ['PM', 'Engineering Manager', 'Customer Success Lead'] },
  'cab-session-transcripts': { participants: ['CAB Facilitator', 'Design Partner', 'Enterprise PMO'] },
};

const segments = ['Enterprise', 'Mid-Market', 'APAC Enterprise', 'EMEA Enterprise', 'North America PMO'];
const regions = ['NA', 'EMEA', 'APAC'];

function createFileRecords() {
  const records = [];
  for (const type of artifactTypes) {
    for (let index = 1; index <= type.count; index += 1) {
      const fileName = `${type.key}-${String(index).padStart(3, '0')}.md`;
      records.push({
        key: `${type.key}-${index}`,
        type: type.key,
        typeLabel: type.label,
        index,
        fileName,
        path: path.join(generatedRoot, type.key, fileName),
        segment: pickOne(segments),
        region: pickOne(regions),
        participants: typeMetadata[type.key].participants,
        targetChars: type.targetChars,
        needs: new Set(),
      });
    }
  }
  return records;
}

function inRange(value, start, end) {
  return value >= start && value <= end;
}

function eligibleForNeed(record, needKey) {
  switch (needKey) {
    case 'data-residency':
      return (
        (record.type === 'nps-survey-responses' && inRange(record.index, 280, 400)) ||
        (record.type === 'churn-exit-interviews' && inRange(record.index, 61, 80)) ||
        (record.type === 'cab-session-transcripts' && inRange(record.index, 25, 40))
      );
    case 'compliance-certs':
      return (
        (record.type === 'churn-exit-interviews' && inRange(record.index, 61, 80)) ||
        (record.type === 'cab-session-transcripts' && inRange(record.index, 31, 40))
      );
    case 'offline':
      return (
        (record.type === 'support-tickets' && inRange(record.index, 460, 500)) ||
        (record.type === 'feature-requests' && inRange(record.index, 170, 200)) ||
        (record.type === 'community-forum-posts' && inRange(record.index, 81, 100))
      );
    case 'multilanguage':
      return (
        (record.type === 'sales-call-notes' && inRange(record.index, 110, 150)) ||
        (record.type === 'nps-survey-responses' && inRange(record.index, 320, 400)) ||
        (record.type === 'support-tickets' && inRange(record.index, 420, 500))
      );
    case 'rollback':
      return (
        (record.type === 'customer-interviews' && inRange(record.index, 120, 150)) ||
        (record.type === 'internal-meeting-notes' && inRange(record.index, 50, 80)) ||
        (record.type === 'cab-session-transcripts' && inRange(record.index, 30, 40))
      );
    case 'approval-workflows':
      return ['customer-interviews', 'cs-qbr-notes', 'internal-meeting-notes'].includes(record.type);
    case 'guest-access':
      return ['sales-call-notes', 'feature-requests', 'community-forum-posts'].includes(record.type);
    case 'bulk-operations':
      return ['support-tickets', 'feature-requests', 'cs-qbr-notes'].includes(record.type);
    case 'template-library':
      return ['customer-interviews', 'internal-meeting-notes', 'community-forum-posts'].includes(record.type);
    case 'mobile':
      return ['sales-call-notes', 'nps-survey-responses', 'feature-requests'].includes(record.type);
    default:
      return true;
  }
}

function createNeedAssignments(records, noiseKeys) {
  const noiseSet = new Set(noiseKeys);
  const assignedCounts = Object.fromEntries(needs.map((need) => [need.key, 0]));

  for (const need of needs) {
    let pool = records.filter((record) => !noiseSet.has(record.key) && eligibleForNeed(record, need.key));

    if (need.key === 'data-residency' || need.key === 'multilanguage') {
      pool = pool.filter((record) => record.region === 'APAC');
    }

    const shuffledPool = shuffle(pool);
    let assigned = 0;

    for (const record of shuffledPool) {
      if (assigned >= need.targetMentions) {
        break;
      }
      if (record.needs.has(need.key)) {
        continue;
      }
      if (record.needs.size >= 3 && rng() < 0.85) {
        continue;
      }
      record.needs.add(need.key);
      assigned += 1;
    }

    if (assigned < need.targetMentions) {
      throw new Error(`Unable to assign all mentions for need ${need.key}. Assigned ${assigned}/${need.targetMentions}`);
    }

    assignedCounts[need.key] = assigned;
  }

  return assignedCounts;
}

function fillToTarget(base, targetChars) {
  if (base.length >= targetChars) {
    return base;
  }

  const fillerBlocks = [
    'Evidence note: customer language often differs by function, but each artifact should be interpreted in the context of governance, operational scale, and cross-team collaboration constraints.',
    'Analyst memo: this interaction includes both explicit requests and implicit workflow pain; downstream synthesis should normalize terminology while preserving direct quote intent.',
    'Context detail: account maturity, regional policy requirements, and implementation history influenced how participants framed needs during this conversation.',
    'Interpretation guidance: avoid overfitting to single phrases; classify pain by underlying job-to-be-done and control requirements where relevant.'
  ];

  let content = base;
  while (content.length < targetChars) {
    content += `\n\n${pickOne(fillerBlocks)}`;
  }
  return content;
}

function renderRecord(record, noiseSet) {
  const needKeys = [...record.needs];
  const participants = `${pickOne(record.participants)}, ${pickOne(record.participants)}, ${pickOne(record.participants)}`;

  const header = [
    `# ${record.typeLabel} ${String(record.index).padStart(3, '0')}`,
    '',
    `- Artifact Type: ${record.typeLabel}`,
    `- Segment: ${record.segment}`,
    `- Region: ${record.region}`,
    `- Participants: ${participants}`,
    `- Source ID: ${record.type.toUpperCase()}-${7000 + record.index}`,
    '',
    '## Summary',
  ].join('\n');

  let body = '';

  if (noiseSet.has(record.key)) {
    body += `${pickOne(noiseSnippets)} ${pickOne(noiseSnippets)}\n\n`;
    body += '## Notes\n';
    body += `${pickOne(noiseSnippets)} ${pickOne(noiseSnippets)}\n`;
    body += '\n## Signals\n';
    body += '- Overall sentiment: positive\n- Product fit: acceptable\n- Critical pain discussed: none\n';
  } else {
    body += `${pickOne(adjacentPainSnippets)} ${pickOne(adjacentPainSnippets)}\n\n`;
    body += '## Evidence Extracts\n';

    if (needKeys.length === 0) {
      body += '- No explicit top-20 catalog need in this artifact; mostly workflow clarification and onboarding friction.\n';
    } else {
      for (const needKey of needKeys) {
        const need = needs.find((item) => item.key === needKey);
        const expression = pickOne(needExpressions[needKey]);
        const segment = pickOne(need.segments);
        body += `- Need Signal: ${need.label} (${segment})\n`;
        body += `  - Quote: "${expression}"\n`;
        body += `  - Confidence: ${pickOne(['high', 'medium', 'high'])}\n`;
      }
    }

    body += '\n## Additional Context\n';
    body += `${pickOne(adjacentPainSnippets)} ${pickOne(adjacentPainSnippets)}\n`;
  }

  const full = `${header}\n${body}`;
  return fillToTarget(full, record.targetChars);
}

async function writeSeedFiles() {
  const files = [
    {
      name: '01-company-background.md',
      content: `# Worklane Company Background\n\nWorklane is a B2B product planning platform used by multi-team organizations. Customers use Worklane for roadmap planning, intake management, and portfolio visibility.\n\n## Current Situation\n- Adoption has grown across enterprise and upper mid-market accounts.\n- Expansion opportunities are high, but enterprise conversion depends on governance and controls.\n- Feedback was gathered from interviews, support tickets, sales calls, NPS responses, community posts, QBRs, churn exits, and CAB sessions over the last 12 months.\n\n## This Lab\nYou are asked to produce a **Customer Needs Document** that captures recurring customer pain signals and ranks them by impact and frequency.`
    },
    {
      name: '02-product-overview.md',
      content: `# Product Overview\n\nWorklane supports roadmap creation, prioritization, and cross-functional planning. Core users include product managers, PMO teams, engineering leaders, and executive stakeholders.\n\n## Known Constraints\n- Existing role model is too coarse in enterprise settings.\n- Reporting depth varies by workspace maturity.\n- Integration demands have increased as customers connect Worklane to adjacent systems.\n\n## Important\nDo not jump to solution design. The required output is a customer needs catalog focused on pain and unmet needs.`
    },
    {
      name: '03-research-methodology.md',
      content: `# Research Methodology and Rules\n\n## Required Outcome\nProduce one Customer Needs Document with:\n1. Distinct customer needs (deduplicated).\n2. Relative frequency and supporting evidence.\n3. Affected segments and business impact.\n\n## Working Rules\n- Context is too large for one-shot processing.\n- You must process artifacts in chunks and maintain a local summary file after each chunk.\n- Final synthesis must be based on those chunk summaries.\n- Missing files or ranges will lead to incomplete results.\n\n## Evaluation\nYour output will be compared to a reference set of expected needs. You are not expected to match wording exactly, but missing needs and incorrect frequency direction are quality gaps.`
    },
    {
      name: '04-team-org-chart.md',
      content: `# Team and Stakeholder Map\n\n## Internal Teams\n- Product Management\n- Customer Success\n- Sales\n- Support\n- Security and Compliance\n\n## External Stakeholder Segments\n- Enterprise PMO\n- Business Unit Program Managers\n- IT and Identity Teams\n- Executive Sponsors\n\n## Why this matters\nNeeds appear in different language across stakeholder groups. Your synthesis should normalize these into a clear, non-overlapping needs catalog.`
    },
    {
      name: '05-deliverable-format.md',
      content: `# Deliverable Format\n\nYour final output must be a concise Customer Needs Document:\n- Ranked list of customer needs\n- Frequency estimate bucket per need\n- 1-2 representative evidence excerpts per need\n- Affected segments and business impact\n- Risks of not addressing each need\n\nDo not include implementation design or technical architecture. Keep the scope focused on customer pain and validated need signals.`
    },
  ];

  await fs.rm(seedRoot, { recursive: true, force: true });
  await fs.mkdir(seedRoot, { recursive: true });

  for (const file of files) {
    await fs.writeFile(path.join(seedRoot, file.name), file.content, 'utf8');
  }
}

async function main() {
  await fs.rm(generatedRoot, { recursive: true, force: true });
  await fs.mkdir(generatedRoot, { recursive: true });

  const records = createFileRecords();
  const noiseCount = Math.floor(records.length * 0.3);
  const noiseKeys = new Set(shuffle(records.map((record) => record.key)).slice(0, noiseCount));

  const assignedCounts = createNeedAssignments(records, noiseKeys);

  for (const type of artifactTypes) {
    await fs.mkdir(path.join(generatedRoot, type.key), { recursive: true });
  }

  let totalChars = 0;
  let totalWords = 0;

  for (const record of records) {
    const content = renderRecord(record, noiseKeys);
    await fs.writeFile(record.path, content, 'utf8');

    totalChars += content.length;
    totalWords += content.split(/\s+/).filter(Boolean).length;
  }

  await writeSeedFiles();

  const stats = {
    generatedAt: new Date().toISOString(),
    artifactTypeCounts: Object.fromEntries(artifactTypes.map((item) => [item.key, item.count])),
    totalFiles: records.length,
    noiseFiles: noiseKeys.size,
    needMentionCounts: assignedCounts,
    totalChars,
    totalWords,
    approxTokens: Math.round(totalChars / 4),
  };

  await fs.writeFile(statsFile, JSON.stringify(stats, null, 2), 'utf8');

  console.log(`Generated ${records.length} files.`);
  console.log(`Noise files: ${noiseKeys.size}`);
  console.log(`Approx tokens: ${stats.approxTokens}`);
  console.log(`Stats file: ${statsFile}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

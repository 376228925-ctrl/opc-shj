/**
 * Types for SF Express AI Competition Finals Showcase
 * Project: 从人工智能到共生智能 —— 语义层数据分析实践 (Cognitive Shift)
 * Track: 个人赛道 · OPC 全链路 TOP 10
 */

export interface MetricItem {
  name: string;
  before: string;
  after: string;
  improvement: string;
  improvementRate: number; // percentage
  desc: string;
}

export interface SemanticLayerDef {
  id: 'data' | 'business' | 'analysis';
  title: string;
  subtitle: string;
  coreQuestion: string;
  definition: string;
  rules: string[];
  antiPattern: string;
  bestPractice: string;
  color: string;
}

export interface CaseStep {
  step: number;
  phase: string;
  semanticRole: string;
  userPrompt: string;
  aiAction: string;
  evidenceProduced: string;
  businessOutcome: string;
  image?: string;
}

export interface ImageEvidence {
  id: string;
  src: string;
  title: string;
  category: 'pain_point' | 'architecture' | 'engineering' | 'cases' | 'feedback';
  caption: string;
  highlights: string[];
}

export interface ScorecardCriterion {
  category: string;
  weight: number;
  subitems: {
    title: string;
    weight: string;
    claim: string;
    evidence: string;
  }[];
}

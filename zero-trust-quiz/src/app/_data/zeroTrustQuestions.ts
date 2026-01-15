export interface QuizQuestion {
  id: number;
  question: string;
  choices: string[];
  correctAnswerIndex: number;
  explanation: string;
  tags: string[];
}

export const zeroTrustQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "ゼロトラストアーキテクチャにおいて、リソースへのアクセスを実際に許可または拒否する決定を下すコンポーネントはどれですか？",
    choices: [
      "Policy Enforcement Point (PEP)",
      "Policy Decision Point (PDP)",
      "Policy Information Point (PIP)",
      "Resource"
    ],
    correctAnswerIndex: 1,
    explanation: "Policy Decision Point (PDP) は制御プレーンに位置し、ポリシーエンジンとポリシー管理者から構成されます。PDPはアクセスポリシーに基づいてアクセスを許可または拒否する決定を下します。PEPはその決定を実行する役割を持ちます。",
    tags: ["PDP", "制御プレーン"]
  },
  {
    id: 2,
    question: "Policy Enforcement Point (PEP) はどのプレーンに位置しますか？",
    choices: [
      "制御プレーンのみ",
      "データプレーンのみ",
      "制御プレーンとデータプレーンの両方",
      "どちらでもない"
    ],
    correctAnswerIndex: 1,
    explanation: "PEPはデータプレーンに位置し、サブジェクトとリソース間の接続を仲介します。PDPからの許可/拒否の指示に基づいて、アクセスを強制（許可、拒否、制限、終了）します。",
    tags: ["PEP", "データプレーン"]
  },
  {
    id: 3,
    question: "PDPがポリシー決定を下すために必要な情報を供給するコンポーネントはどれですか？",
    choices: [
      "Policy Enforcement Point (PEP)",
      "Policy Decision Point (PDP)",
      "Policy Information Point (PIP)",
      "Subject"
    ],
    correctAnswerIndex: 2,
    explanation: "Policy Information Points (PIPs) は、PDPがポリシー決定を下すために必要な情報を供給するサポートコンポーネントです。ICAM、エンドポイントセキュリティ、セキュリティ分析、データセキュリティなどの情報を提供します。",
    tags: ["PIP", "サポートコンポーネント"]
  },
  {
    id: 4,
    question: "ゼロトラストアーキテクチャにおいて、リソース（Resource）とは何を指しますか？",
    choices: [
      "アクセスを制御するポリシーエンジン",
      "ユーザーがアクセスしようとしている保護対象のサービスやデータ",
      "認証情報を管理するICAMシステム",
      "エンドポイントのセキュリティ状態を監視するシステム"
    ],
    correctAnswerIndex: 1,
    explanation: "Resource（リソース）は、ユーザーがアクセスしようとしている保護対象のサービスやデータです。クラウド上またはオンプレミス上に存在するWebアプリケーション、API、データベースなどが該当します。このクイズアプリケーション自体もResourceの一例です。",
    tags: ["Resource", "保護対象"]
  },
  {
    id: 5,
    question: "ゼロトラストアーキテクチャにおいて、Subject（サブジェクト）は何から構成されますか？",
    choices: [
      "User（ユーザー）のみ",
      "Endpoint（エンドポイント）のみ",
      "User（ユーザー）とEndpoint（エンドポイント）",
      "PEPとPDP"
    ],
    correctAnswerIndex: 2,
    explanation: "Subject（サブジェクト）は、ゼロトラストの原則においてリソースにアクセスしようとするエンティティで、User（ユーザー）とEndpoint（エンドポイント）から構成されます。エンドポイントは、デスクトップPC、ノートPC、スマートフォン、タブレットなどのデバイスを指します。",
    tags: ["Subject", "User", "Endpoint"]
  },
  {
    id: 6,
    question: "I(1) という記号は、ゼロトラストアーキテクチャ図において何を表しますか？",
    choices: [
      "セッション管理",
      "リソース管理",
      "初期接続（Initial Connection）",
      "ポリシー決定"
    ],
    correctAnswerIndex: 2,
    explanation: "I(N) は Initial Connection（初期接続）を表します。I(1) は、サブジェクトがPEPに対して送信する初期アクセスリクエスト（identity and credentials）を指します。",
    tags: ["Initial Connection", "I(1)"]
  },
  {
    id: 7,
    question: "S(X) という記号は、ゼロトラストアーキテクチャ図において何を表しますか？",
    choices: [
      "初期接続",
      "セッション管理（Session Management）",
      "リソース管理",
      "ポリシー情報取得"
    ],
    correctAnswerIndex: 1,
    explanation: "S(X) は Session Management（セッション管理）を表します。これには、定期的な再認証チャレンジ/応答やエンドポイントの衛生状態の検証などが含まれます。",
    tags: ["Session Management", "S(X)"]
  },
  {
    id: 8,
    question: "R(X) という記号は、ゼロトラストアーキテクチャ図において何を表しますか？",
    choices: [
      "初期接続",
      "セッション管理",
      "リソース管理（Resource Management）",
      "認証情報の検証"
    ],
    correctAnswerIndex: 2,
    explanation: "R(X) は Resource Management（リソース管理）を表します。これには、リソースへの認証と検証のリクエスト、セッションの確立、定期的なリソースの再認証チャレンジ/応答などが含まれます。",
    tags: ["Resource Management", "R(X)"]
  },
  {
    id: 9,
    question: "PIP（Policy Information Points）のサポートコンポーネントとして含まれないものはどれですか？",
    choices: [
      "ICAM（Identity, Credential, and Access Management）",
      "Endpoint Security",
      "Security Analytics",
      "Policy Engine"
    ],
    correctAnswerIndex: 3,
    explanation: "Policy EngineはPDP（Policy Decision Point）の一部であり、PIPではありません。PIPのサポートコンポーネントには、ICAM、Endpoint Security、Security Analytics、Data Securityが含まれます。",
    tags: ["PIP", "サポートコンポーネント"]
  },
  {
    id: 10,
    question: "ゼロトラストアーキテクチャにおいて、継続的なアクセス評価はどのように実現されますか？",
    choices: [
      "初期認証のみで十分",
      "定期的な再認証とエンドポイントの衛生状態の検証",
      "リソースへのアクセス時に一度だけ検証",
      "ユーザーが要求した時のみ検証"
    ],
    correctAnswerIndex: 1,
    explanation: "ゼロトラストでは、一度の認証で終わりではなく、継続的なアクセス評価が必要です。定期的な再認証チャレンジ/応答とエンドポイントの衛生状態の検証（S(D)）により、セッション中も継続的にアクセス権限を評価します。",
    tags: ["継続的評価", "セッション管理"]
  },
  {
    id: 11,
    question: "このクイズアプリケーション（Next.jsアプリ）は、ゼロトラストアーキテクチャにおいてどのコンポーネントに該当しますか？",
    choices: [
      "Policy Enforcement Point (PEP)",
      "Policy Decision Point (PDP)",
      "Resource（リソース）",
      "Policy Information Point (PIP)"
    ],
    correctAnswerIndex: 2,
    explanation: "このNext.jsクイズアプリケーションは、ユーザーがアクセスしようとしている保護対象のサービスであるため、Resource（リソース）に該当します。実際のゼロトラスト環境では、Envoy（PEP）の背後で公開され、OPA（PDP）と連携してアクセス制御されることになります。",
    tags: ["Resource", "実装例"]
  },
  {
    id: 12,
    question: "ゼロトラストアーキテクチャにおいて、PEPとPDPの間でやり取りされる情報には何が含まれますか？",
    choices: [
      "サブジェクトとエンドポイントの検証に必要な情報のみ",
      "アクセス要求、定期的な検証情報、アクセス許可/拒否の指示",
      "リソースのデータ内容",
      "ユーザーのパスワード"
    ],
    correctAnswerIndex: 1,
    explanation: "PEPとPDPの間では、サブジェクトとエンドポイントの検証に必要な情報（I(2)）、アクセス要求、定期的な検証情報（S(A)/R(A)）、アクセス許可/拒否（I(4)）、セッションの継続/制限/終了、リソースアクセスの取り消し/制限（S(C)/R(C)）などがやり取りされます。",
    tags: ["PEP", "PDP", "情報交換"]
  }
];

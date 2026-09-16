import { UserProfile } from '../types';

export const PROFILES: UserProfile[] = [
  {
    id: 'ray-chen',
    name: '陳品叡',
    nameEn: 'Ray Chen',
    title: '資深全端架構師 & 技術主管',
    titleEn: 'Staff Full-Stack Architect & Engineering Lead',
    tagline: '專注於高併發分散式系統架構、現代 Web 體驗與工程效能卓越化，熱愛開源與技術傳承。',
    statusText: '尋求技術架構 / 顧問合作與領導機會',
    statusType: 'available',
    location: '台灣 台北 / 接受混合與遠端辦公 (UTC+8)',
    yearsOfExp: 8,
    email: 'ray.chen.architect@example.com',
    phone: '+886 912-345-678',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    blog: 'https://medium.com',
    about: [
      '擁有超過 8 年的企業級軟體研發經驗，曾主導數億級日請求量之金融科技交易系統與大型 SaaS 平台的架構現代化與微服務演進。',
      '堅信「技術服務於商業價值，架構基於團隊敏捷」。擅長使用 TypeScript、Go、React、Node.js 與 Kubernetes 打造兼顧毫秒級響應與高可用性之全端解決方案。',
      '曾帶領 15+ 人的跨國研發工程團隊，落實 CI/CD 自動化流程、Clean Code 規範與敏捷衝刺，使產品迭代週期縮短 40%，並培育多位資深技術骨幹。'
    ],
    stats: [
      { label: '軟體研發年資', value: '8+', hint: '從創業團隊到上市公司' },
      { label: '成功交付專案', value: '45+', hint: '涵蓋金融、電商與雲端服務' },
      { label: '技術團隊規模', value: '15+', hint: '跨國敏捷敏捷開發領導' },
      { label: '系統可用性承諾', value: '99.99%', hint: '零故障高併發實績' }
    ],
    languages: [
      { language: '中文 (母語 Traditional Chinese)', level: '母語精通 Native', percent: 100 },
      { language: '英語 (English Professional)', level: '商務流利 / 跨國會議 (TOEIC 940)', percent: 92 },
      { language: '日語 (Japanese Conversational)', level: '基礎日常溝通 (JLPT N3)', percent: 60 }
    ],
    values: [
      {
        title: '架構穩健性 (Robustness)',
        desc: '不盲目追求新技術，優先評估系統容錯、可維護性與可擴展性，為長期業務增長奠定基石。',
        iconName: 'ShieldCheck'
      },
      {
        title: '極致使用者體驗 (Product Craft)',
        desc: '兼顧工程邏輯與美學細節，重視前端首屏加載毫秒數、互動流暢度與無障礙友好設計。',
        iconName: 'Sparkles'
      },
      {
        title: '工程文化與傳承 (Engineering Culture)',
        desc: '透過 Code Review、架構評審會與技術 Workshop，建立互信、主動與持績進步的工程團隊。',
        iconName: 'Users'
      },
      {
        title: '數據與業務驅動 (Data-Driven Decisions)',
        desc: '結合 APM 監控、用戶行為指標與 A/B 測試，以客觀數據驗證架構演進效益與業務轉換。',
        iconName: 'TrendingUp'
      }
    ],
    experiences: [
      {
        id: 'exp-1',
        type: 'work',
        role: '技術主管 & 資深架構師 (Tech Lead & Staff Architect)',
        organization: 'ApexFin 金融科技集團',
        department: '核心支付與交易架構部',
        period: '2022.03 - 至今',
        location: '台北市信義區',
        current: true,
        summary: '負責核心高併發即時支付清算系統架構重構，帶領 12 名工程師完成微服務拆分與雲原生遷移。',
        achievements: [
          '主導將單體架構 (Monolith) 現代化重構為以 Go 與 Kafka 驅動之事件驅動微服務架構，TPS 由 1,200 提升至 18,000+，峰值延遲降低 65%。',
          '打造跨團隊共用前端微應用架構 (Micro-frontends) 與 Design System，跨部門元件重用率提升 75%，前端打包體積縮減 48%。',
          '建立全自動化金絲雀發佈 (Canary Deployment) 與自動降級熔斷機制，達成年度 99.995% 系統可用性 SLA。',
          '主辦內部架構論壇，推動 TypeScript 全棧規範與自動化端到端測試，覆蓋率提升至 88%。'
        ],
        skills: ['TypeScript', 'Go', 'React', 'Kubernetes', 'Kafka', 'PostgreSQL', 'Docker', 'AWS'],
        link: 'https://apexfin-demo.example.com'
      },
      {
        id: 'exp-2',
        type: 'work',
        role: '資深全端工程師 (Senior Full-Stack Engineer)',
        organization: 'OmniCloud 雲端軟體科技',
        department: 'B2B 企業級 SaaS 產品處',
        period: '2019.07 - 2022.02',
        location: '台北市南港軟體園區',
        summary: '主導多租戶 (Multi-tenant) 協同作業平台的核心功能研發，負責前端效能優化與後端即時通訊協議。',
        achievements: [
          '採用 React 18、Zustand 與 WebSocket 開發百萬級節點之協同畫布與甘特圖引擎，支援 100+ 人同時在線即時編輯無卡頓。',
          '設計基於 Redis Cluster 與 GraphQL 的智慧快取機制，資料庫讀取負載降低 55%，首屏渲染時間從 3.2s 縮短至 0.8s。',
          '建立標準化 OpenAPI 文檔生成與 Mock 測試流程，前後端聯調時間縮短 30%。',
          '指導 4 位初中階工程師，獲得年度最佳團隊導師獎 (Mentorship of the Year)。'
        ],
        skills: ['React', 'Node.js', 'GraphQL', 'Redis', 'WebSockets', 'TailwindCSS', 'Jest', 'GCP']
      },
      {
        id: 'exp-3',
        type: 'work',
        role: '全端軟體工程師 (Software Engineer)',
        organization: 'Vanguard 數碼互動科技',
        department: '電商解決方案研發小組',
        period: '2017.08 - 2019.06',
        location: '新北市板橋區',
        summary: '開發跨境電子商務系統之購物車、促銷折扣引擎及第三方物流與金流串接模組。',
        achievements: [
          '獨立完成綠界、藍新、LINE Pay、Stripe 等多元支付閘道串接，處理總交易金額突破 3 億新台幣。',
          '針對雙十一檔期進行全面壓力測試與 SQL 查詢索引優化，成功抵禦單日 50 萬次訂單衝擊。',
          '重構前端響應式排版與圖片動態延遲載入 (Lazy loading)，Google Lighthouse 評分由 62 提升至 95。'
        ],
        skills: ['JavaScript', 'Vue.js', 'Node.js', 'Express', 'MySQL', 'RESTful API', 'Nginx']
      },
      {
        id: 'exp-4',
        type: 'education',
        role: '資訊工程學系 碩士 (M.S. in Computer Science)',
        organization: '國立交通大學 (National Chiao Tung University)',
        period: '2015.09 - 2017.06',
        location: '新竹市',
        summary: '專攻分散式系統、雲端運算與網路通訊通訊協定，論文研究分散式分散快取一致性演算法。',
        achievements: [
          '碩士論文：《基於邊緣運算環境之動態自適應多層級快取架構研究》，獲得優秀畢業論文獎。',
          '擔任計算機網路與作業系統課程助教，指導 120+ 位大學部學生實驗室專題。',
          '在國際頂尖學術會議發表 1 篇論文 (IEEE CloudCom Workshop)。'
        ],
        skills: ['Distributed Systems', 'Algorithms', 'Cloud Computing', 'C/C++', 'Linux Kernel']
      },
      {
        id: 'exp-5',
        type: 'education',
        role: '資訊工程學系 學士 (B.S. in Computer Science & Engineering)',
        organization: '國立交通大學 (National Chiao Tung University)',
        period: '2011.09 - 2015.06',
        location: '新竹市',
        summary: '奠定紮實之計算機架構、資料結構、演算法、離散數學與物件導向軟體工程理論基礎。',
        achievements: [
          '連續三學期榮獲書卷獎 (Academic Excellence Award, 前 5%)。',
          '大專院校程式設計競賽 (ICPC 台灣賽區) 榮獲二等獎。',
          '主辦交大開源社團 (NCTU Open Source Club) 技術分享會與黑客松。'
        ],
        skills: ['Data Structures', 'Operating Systems', 'Computer Networks', 'Java', 'Python']
      },
      {
        id: 'exp-6',
        type: 'award',
        role: 'AWS Certified Solutions Architect – Professional',
        organization: 'Amazon Web Services (AWS)',
        period: '2023.08 獲得 (有效至 2026)',
        location: '全球認證',
        summary: '具備在 AWS 平台上設計高度可用、具容錯能力且成本優化的複雜雲端企業級系統架構之專業能力。',
        achievements: [
          '精通 Multi-VPC 拓撲、Transit Gateway、EKS 容器排程與 Serverless 無伺服器混合雲架構。'
        ],
        skills: ['AWS Solutions Architecture', 'EKS', 'CloudFormation', 'FinOps']
      },
      {
        id: 'exp-7',
        type: 'award',
        role: '全國大專與產業開源黑客松 首獎 (1st Place Champion)',
        organization: '數位發展部 / 開源社群協辦',
        period: '2021.11',
        location: '台北',
        summary: '以分散式離線 P2P 救災資訊中繼系統作品從 80+ 組參賽隊伍中脫穎而出奪得冠軍。',
        achievements: [
          '於 48 小時內完成 WebRTC 與 Service Worker 離線快取原型，獲得產業評審一致最高評分。'
        ],
        skills: ['WebRTC', 'PWA', 'Offline First', 'Rapid Prototyping']
      }
    ],
    skills: [
      // Frontend
      { id: 's1', name: 'React 18 / 19 & Next.js', category: 'frontend', level: 96, years: 7, featured: true, tag: '核心框架', description: '熟練 SSR、RSC、Suspense、Hooks 原理與現代狀態管理' },
      { id: 's2', name: 'TypeScript & JavaScript (ESNext)', category: 'frontend', level: 98, years: 8, featured: true, tag: '核心語言', description: '深諳進階型別推論、泛型編程、AST 與編譯器工具鏈' },
      { id: 's3', name: 'Tailwind CSS & Design Systems', category: 'frontend', level: 94, years: 5, featured: true, tag: 'UI工程', description: '建立企業級原子化設計系統與無障礙可存取性 (a11y) 標準' },
      { id: 's4', name: 'Vue 3 & Vite 生態圈', category: 'frontend', level: 85, years: 4, featured: false, tag: '現代前端', description: '熟悉 Composition API、Pinia 與前端構建效能調優' },
      { id: 's5', name: 'Web 效能優化 (Core Web Vitals)', category: 'frontend', level: 92, years: 6, featured: true, tag: '極致體驗', description: 'LCP、INP、CLS 診斷調優、資源預加載與渲染流水線分析' },
      
      // Backend
      { id: 's6', name: 'Node.js & Express / NestJS', category: 'backend', level: 95, years: 8, featured: true, tag: '後端主力', description: '熟悉 Event Loop 機制、Stream、叢集負載與高效微服務開發' },
      { id: 's7', name: 'Go (Golang)', category: 'backend', level: 90, years: 4, featured: true, tag: '高併發', description: '擅長 Goroutine 併發控制、Channel 與百萬級 TPS 服務編寫' },
      { id: 's8', name: 'PostgreSQL & MySQL', category: 'backend', level: 90, years: 7, featured: true, tag: '關聯式資料庫', description: '複雜 SQL 撰寫、查詢執行計劃 (EXPLAIN)、B+Tree 索引優化' },
      { id: 's9', name: 'Redis & 分散式快取', category: 'backend', level: 92, years: 6, featured: false, tag: '內存資料庫', description: '分散式鎖、防穿透/雪崩策略、Pub/Sub 與多級快取設計' },
      { id: 's10', name: 'Apache Kafka & RabbitMQ', category: 'backend', level: 88, years: 4, featured: false, tag: '訊息佇列', description: '事件驅動架構、日誌壓縮、消息冪等性與死信處理' },

      // DevOps & Cloud
      { id: 's11', name: 'Kubernetes (K8s) & Docker', category: 'devops', level: 90, years: 5, featured: true, tag: '容器編排', description: 'Helm Chart 封裝、HPA 自動擴展、Ingress Controller 與資源調配' },
      { id: 's12', name: 'AWS & GCP 雲端基礎設施', category: 'devops', level: 89, years: 6, featured: true, tag: '雲原生', description: 'Terraform IaC 宣告式部署、VPC 安全網段與成本優化' },
      { id: 's13', name: 'CI/CD Pipeline (GitHub Actions/GitLab)', category: 'devops', level: 92, years: 6, featured: false, tag: '自動化', description: '全自動化測試流水線、靜態代碼掃描與金絲雀灰度發佈' },
      { id: 's14', name: '監控可觀測性 (Prometheus / Grafana)', category: 'devops', level: 86, years: 4, featured: false, tag: 'SRE維運', description: '全鏈路分散式追蹤 (OpenTelemetry)、告警閾值與健康監控' },

      // Architecture & Leadership
      { id: 's15', name: '微服務與領域驅動設計 (DDD)', category: 'architecture', level: 92, years: 5, featured: true, tag: '系統架構', description: '邊界上下文劃分、聚合根設計與事件風暴 (Event Storming)' },
      { id: 's16', name: '微前端架構 (Micro-Frontends)', category: 'architecture', level: 88, years: 3, featured: false, tag: '前端架構', description: 'Module Federation、沙箱隔離機制與巨石前端拆解' },
      { id: 's17', name: '技術團隊管理與敏捷教練', category: 'architecture', level: 90, years: 4, featured: true, tag: '領導力', description: 'Scrum 衝刺規劃、OKRs 指標對齊、技術晉升路徑與團隊招聘' }
    ],
    projects: [
      {
        id: 'proj-1',
        title: 'NovaPay 全球即時清算微服務平台',
        subtitle: '支持 20,000+ 峰值 TPS 之金融級事件驅動交易處理引擎',
        category: 'cloud',
        categoryLabel: '雲端微服務 & 金融科技',
        featured: true,
        period: '2023.01 - 2024.04',
        summary: '針對跨國跨幣別支付結算延遲過長痛點，重新打造具強一致性與自動補償機制之金融交易清算微服務平台。',
        challenge: '舊有系統為巨石架構，在促銷高峰期經常發生資料庫死鎖與超載，且跨國幣別匯率結算需等待數分鐘，無法滿足全球即時交易要求。',
        solution: '採用 Go + Kafka 構建事件驅動與 Saga 分散式交易模式，配合 Redis 叢集實施令牌桶防刷與分散式樂觀鎖；前端管理台使用 React 19 與 Server Components 呈現即時監控看盤。',
        metrics: [
          '平均每筆交易結算延遲由 2,400ms 降至 85ms (降低 96%)',
          '成功承載黑色星期五峰值 22,000 TPS 零掉單紀錄',
          '硬體運算伺服器成本因雲原生容器化降低 38%'
        ],
        technologies: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL', 'Redis', 'React 19', 'Docker', 'AWS'],
        demoUrl: 'https://demo-novapay.example.com',
        githubUrl: 'https://github.com/example/novapay-core',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        accentColor: 'indigo'
      },
      {
        id: 'proj-2',
        title: 'PulseCanvas 企業級即時協作視覺化引擎',
        subtitle: '支援百人同畫布即時協作、無限縮放與百萬節點圖形渲染',
        category: 'fullstack',
        categoryLabel: '企業級全端 & 互動引擎',
        featured: true,
        period: '2022.05 - 2022.12',
        summary: '專為跨國架構師與產品團隊打造的在線系統拓撲繪圖與白板協作平台，具備離線編輯與多端即時同步能力。',
        challenge: '在瀏覽器中渲染上萬個節點連線時，DOM 操作極度卡頓，多用戶並行衝突時容易出現畫面狀態撕裂或資料遺失。',
        solution: '基於 HTML5 Canvas + WebGL 實現分層圖形管線，結合 CRDT (Conflict-free Replicated Data Types) 演算法與 WebSocket 二進制傳輸協議，徹底解決並行編輯衝突。',
        metrics: [
          '畫布渲染幀率在 10,000 節點場景下穩定保持 60 FPS',
          '全球同時在線協同編輯延遲低於 40ms',
          '推出首年累積 120,000+ 企業註冊用戶，滿意度達 98%'
        ],
        technologies: ['TypeScript', 'React', 'WebGL', 'WebSockets', 'Node.js', 'Redis', 'TailwindCSS'],
        demoUrl: 'https://pulsecanvas-demo.example.com',
        githubUrl: 'https://github.com/example/pulse-canvas',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        accentColor: 'emerald'
      },
      {
        id: 'proj-3',
        title: 'DataGenie 企業級智慧數據洞察與問答平台',
        subtitle: '整合 LLM Agent、向量資料庫與自然語言轉 SQL 之 BI 智能中樞',
        category: 'ai',
        categoryLabel: 'AI 與數據應用',
        featured: true,
        period: '2023.09 - 2024.02',
        summary: '非技術業務人員可直接透過自然對話詢問營運數據，平台即時生成 SQL、執行驗證並產出動態互動圖表與決策摘要。',
        challenge: '非技術部門產出數據報表需仰賴工程師耗時 2-3 天撰寫 SQL，且傳統 LLM 容易產生幻覺 (Hallucination) 生成錯誤語法。',
        solution: '設計結合企業 Schema 元數據的 RAG (檢索增強) 檢驗機制，建立雙層 AST 解析沙箱確保 SQL 安全性，並透過 React + D3 提供動態多維度報表渲染。',
        metrics: [
          '企業內部數據分析需求響應時間從 3 天縮減至 15 秒',
          'SQL 自動生成準確率經過持續回饋對齊達 96.4%',
          '每月節省資料工程團隊超過 300 小時重複報表撰寫時間'
        ],
        technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Qdrant', 'TailwindCSS', 'D3.js'],
        demoUrl: 'https://datagenie.example.com',
        githubUrl: 'https://github.com/example/data-genie',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        accentColor: 'amber'
      },
      {
        id: 'proj-4',
        title: 'Vanguard Design System 現代設計系統與組件庫',
        subtitle: '具備高無障礙標準與自動化文件之跨專案共用組件生態',
        category: 'opensource',
        categoryLabel: '開源工具 & 軟體工程',
        featured: false,
        period: '2021.03 - 2021.10',
        summary: '整合公司旗下 6 款 Web 產品之 UI 規範，提供 50+ 個可高度自訂、通過 WCAG AAA 檢測的 React 組件與主題切換機制。',
        challenge: '各產品各自重複造輪子，樣式風格不統一，且前端工程師每次都要重新實作 Select、Modal、Table 等複雜互動邏輯。',
        solution: '利用 Radix UI 原語與 Tailwind CSS 打造無樣式核心，結合 Storybook 自動化截圖測試與 npm 私有套件發布流水線。',
        metrics: [
          '新產品前端介面開發效率提升 60%',
          'GitHub 累積超過 1,400 顆星，被超過 15 個外部專案採用',
          '完整通過無障礙讀屏測試，覆蓋鍵盤全導覽'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Jest', 'Rollup'],
        demoUrl: 'https://vanguard-ds.example.com',
        githubUrl: 'https://github.com/example/vanguard-design-system',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
        accentColor: 'blue'
      },
      {
        id: 'proj-5',
        title: 'KubeSentry 雲原生微服務診斷與日誌監控儀表板',
        subtitle: '輕量化 Kubernetes Pod 健康分析與日誌追蹤監控工具',
        category: 'cloud',
        categoryLabel: '雲端運維 & 監控可觀測性',
        featured: false,
        period: '2020.08 - 2021.01',
        summary: '為工程師提供免敲 kubectl 命令的圖形化診斷儀表板，即時偵測 CrashLoopBackOff、OOMKilled 等異常並提供修復建議。',
        challenge: '初階工程師排查線上容器故障需頻繁在終端機切換 context 與命名空間，學習門檻高且排查速度慢。',
        solution: '透過 Kube-API 建立長連接 SSE (Server-Sent Events) 即時推送狀態，設計直觀拓撲連線圖與一鍵日誌下載功能。',
        metrics: [
          '線上故障平均定位時間 (MTTD) 縮短 45%',
          '內部工程師每日使用率超過 85%'
        ],
        technologies: ['Go', 'React', 'Kubernetes Client-go', 'SSE', 'ECharts', 'Docker'],
        demoUrl: 'https://kubesentry.example.com',
        githubUrl: 'https://github.com/example/kube-sentry',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        accentColor: 'cyan'
      }
    ]
  },
  {
    id: 'sophia-lin',
    name: '林思妤',
    nameEn: 'Sophia Lin',
    title: '資深前端架構師 & 產品體驗設計師',
    titleEn: 'Senior Frontend Architect & UI/UX Product Designer',
    tagline: '融合設計美學與工程嚴謹度，專注於現代 Web 互動動態、設計系統與極致無障礙體驗。',
    statusText: '開放探討全職遠端或顧問職位',
    statusType: 'open',
    location: '台灣 台北 / 台中',
    yearsOfExp: 6,
    email: 'sophia.lin.design@example.com',
    phone: '+886 923-456-789',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    blog: 'https://sophia-design.example.com',
    about: [
      '兼具深厚前端開發能力與 Figma 產品設計功力，致力於消除「設計稿」與「最終代碼交付」之間的鴻溝。',
      '擁有 6 年 Web 產品開發經驗，精通 React、TypeScript、Tailwind CSS、Framer Motion 與微前端技術。',
      '曾為國際 SaaS 團隊從零規劃統一設計語言 (Design Token)，支援多主題暗黑模式與 100% WCAG AA 級無障礙標準。'
    ],
    stats: [
      { label: '產品設計與開發年資', value: '6+', hint: '跨足設計與工程' },
      { label: '設計系統被調用次數', value: '250K+', hint: '跨產品線高度復用' },
      { label: '用戶滿意度提升', value: '+42%', hint: '易用性測試 (SUS 88)' },
      { label: '首屏效能優化提升', value: '3.2x', hint: 'Web Vitals 綠燈保證' }
    ],
    languages: [
      { language: '中文 (母語)', level: '母語精通 Native', percent: 100 },
      { language: '英語 (English)', level: '流利溝通 (IELTS 7.5)', percent: 90 },
      { language: '法語 (French)', level: '初級基礎 (A2)', percent: 35 }
    ],
    values: [
      {
        title: '以人為本的設計 (Human-Centered)',
        desc: '每一次動畫過渡與間距計算，皆以提升用戶直覺與降低認知負擔為唯一依歸。',
        iconName: 'Heart'
      },
      {
        title: '代碼即設計 (Code as Design)',
        desc: '代碼結構應當如設計規範般優雅有秩序，嚴謹的類型約束帶來最流暢的動態介面。',
        iconName: 'Code'
      },
      {
        title: '無障礙普惠 (Accessibility First)',
        desc: '讓視障、身障或弱網環境的每一位使用者都能平等無礙地享受現代數位科技。',
        iconName: 'Eye'
      }
    ],
    experiences: [
      {
        id: 'exp-s1',
        type: 'work',
        role: '資深前端架構師 (Lead Frontend Architect)',
        organization: 'Aura Labs 數位互動體驗',
        period: '2021.06 - 至今',
        location: '台北市',
        current: true,
        summary: '主導跨國 Design System 與大型 Web 應用程式前端架構升級。',
        achievements: [
          '主導從零開發跨品牌 Design System，涵蓋 60+ 個無障礙原子元件。',
          '優化前端資源加載策略，將大型 SPA 首次加載時間從 2.8s 降至 0.9s。'
        ],
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Motion', 'Next.js']
      }
    ],
    skills: [
      { id: 'ss1', name: 'React & Next.js', category: 'frontend', level: 97, years: 6, featured: true, tag: '主修框架' },
      { id: 'ss2', name: 'UI/UX Design & Figma', category: 'frontend', level: 95, years: 6, featured: true, tag: '介面設計' },
      { id: 'ss3', name: 'Tailwind CSS & CSS Architecture', category: 'frontend', level: 98, years: 5, featured: true, tag: '樣式工藝' },
      { id: 'ss4', name: 'Framer Motion & Web Animations', category: 'frontend', level: 94, years: 4, featured: true, tag: '互動動態' },
      { id: 'ss5', name: 'TypeScript', category: 'frontend', level: 90, years: 5, featured: false, tag: '型別安全' }
    ],
    projects: [
      {
        id: 'sp-1',
        title: 'Prism UI 多主題無障礙設計系統',
        subtitle: '支援雙色暗黑模式、無障礙規範與全自動 Token 映射的現代設計體系',
        category: 'fullstack',
        categoryLabel: 'UI/UX & 開源',
        featured: true,
        period: '2023.03 - 2023.11',
        summary: '為大型跨國電商打造的現代化 Design System，兼具極致流暢之微互動回饋。',
        challenge: '跨國產品存在多種品牌色調與字體階級，舊版元件在行動裝置上點擊區域過小且對比度不足。',
        solution: '建立統一 Figma Token 與 Tailwind 設定檔雙向同步腳本，提供無縫色彩切換體驗。',
        metrics: [
          '跨產品元件一致性達 100%',
          '整體產品易用性指數提升 42%'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma API', 'Storybook'],
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        accentColor: 'pink'
      }
    ]
  }
];

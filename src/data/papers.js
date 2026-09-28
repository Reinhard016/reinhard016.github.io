// 📄 你的论文列表：以后加论文，只要往这个数组里加一项即可。
// authors 里可以用 **粗体** 标注你自己（页面会渲染成加粗）。
// links 里的字段都是可选的，没有就删掉那一行。
export const papers = [
  {
    title:
      "SparkDiffusion: Mitigating the High-Sparsity Trap --- A Unified Framework for up to 265× Single-GPU Acceleration of Visual Generation",
    authors:
      "Yuxi Liu, Haoyu Li, **Zekun Zhang**, Tengxu Sun, Yixiang Cai, Jiayong Li, Yifei Xia, Tianle Liu, Baole Ai, Ang Wang, Jiamang Wang, Lin Qu, Kai Zhang, Kun Yuan, Bin Cui",
    venue: "arXiv preprint",
    year: 2026,
    tags: ["Video Generation", "Sparse Attention", "Acceleration"],
    abstract:
      "提出统一加速框架应对高稀疏陷阱：结合短稀疏预热、少步轨迹混合蒸馏、FP8 量化与融合核，在 Wan2.1/2.2 和 T2V/I2V 任务上实现 97% 注意力稀疏度 + 强视觉质量，单 GPU 端到端加速高达 265×（CFG-free 3 步推理，Wan2.1-T2V-14B-720P，RTX-5090）。",
    links: {
      pdf: "https://arxiv.org/abs/2609.23153",
      code: "",
      project: "",
    },
  },
  {
    title:
      "RoLA: Rotary-Positioned Low-Rank Linear Attention for Efficient Diffusion Transformers",
    authors:
      "**Zekun Zhang**, Yixiang Cai, Yuxi Liu, Tengxu Sun, Tianle Liu, Zhoutong Wu, Haoyu Li, Baole Ai, Ang Wang, Jiamang Wang, Lin Qu, Kun Yuan",
    venue: "arXiv preprint",
    year: 2026,
    tags: ["Video Generation", "Low-Rank Attention", "RoPE"],
    abstract:
      "针对视频 DiT 中 RoPE 与低秩线性全局分支的兼容性问题，提出 RoLA：通过在非线性特征映射前应用 RoPE、重用截断的预训练旋转调度，实现线性时间复杂度的低秩全局分支 + 相对位置感知，90% 稀疏度下保持生成质量并获得 2.63× 端到端加速（Wan2.1-14B, 720P）。",
    links: {
      pdf: "https://arxiv.org/abs/2609.06712",
      code: "",
      project: "",
    },
  },
  {
    title:
      "CrossDistill: Balancing Quality and Diversity via Trajectory-Level Hybrid Few-Step Distillation",
    authors:
      "Yuxi Liu, Haoyu Li, Yixiang Cai, Tengxu Sun, **Zekun Zhang**, Baole Ai, Ang Wang, Jiamang Wang, Lin Qu, Kun Yuan, Kai Zhang",
    venue: "arXiv preprint",
    year: 2026,
    tags: ["Distillation", "Few-Step Generation", "Diffusion"],
    abstract:
      "少步蒸馏需平衡多样性与保真度：轨迹蒸馏保留模态覆盖，分布匹配锐化样本。CrossDistill 提出轨迹级混合框架，在交叉点切分轨迹，高噪声区间用轨迹保持目标、低噪声区间用分布匹配目标，通过交叉耦合实现噪声级别调度策略；在 T2V 和 I2V 扩散模型上验证了质量-多样性前沿拓展。",
    links: {
      pdf: "https://arxiv.org/abs/2609.14725",
      code: "",
      project: "",
    },
  },
  {
    title:
      "Mixture of Distributions Matters: Dynamic Sparse Attention for Efficient Video Diffusion Transformers",
    authors: "Yuxi Liu, Yipeng Hu, **Zekun Zhang**, Kunze Jiang, Kun Yuan",
    venue: "ICML 2026",
    year: 2026,
    tags: ["Video Generation", "Sparse Attention", "DiT"],
    abstract:
      "提出 MoD-DiT：利用早期去噪步骤中的先验信息进行动态稀疏注意力，通过两阶段流程与分布式混合方法，在保持生成质量的同时大幅降低视频扩散 Transformer 的计算开销。",
    links: {
      pdf: "https://arxiv.org/abs/2601.11641",
      code: "",
      project: "",
    },
  },
  {
    title:
      "RoPeSLR: 3D RoPE-driven Sparse-LowRank Attention for Efficient Diffusion Transformers",
    authors: "Yuxi Liu, **Zekun Zhang**, Yixiang Cai, Renjia Deng, Yutong He, Kun Yuan",
    venue: "NeurIPS 2026 (under review)",
    year: 2026,
    tags: ["Video Generation", "Efficient Attention", "RoPE"],
    abstract:
      "针对稀疏注意力在极端稀疏下破坏 3D RoPE 相对位置结构的“RoPE 困境”，提出 3D RoPE 引导的稀疏-低秩注意力框架；在超长视频推理上实现最高 10× 更低 FLOPs 与约 2.9× 端到端加速，同时保持近乎无损的生成质量。",
    links: {
      pdf: "https://arxiv.org/abs/2605.20659",
      code: "",
      project: "",
    },
  },
  {
    title:
      "ReasFlow: Assisting Reasoning-Centric Scientific Discovery in Applied Mathematics via a Knowledge-Based Multi-Agent System",
    authors:
      "Yutong He, Daibo Li, Guohong Li, Jiahe Geng, Zhengyang Huang, Can Ren, **Zekun Zhang**, Yifan Liu, Shuchen Zhu, Hengrui Zhang, Boao Kong, Ming Sun, Shu Li, Chenyi Li, Jiang Hu, Kun Yuan, Zaiwen Wen, Pingwen Zhang",
    venue: "Nature Machine Intelligence (under review)",
    year: 2026,
    tags: ["LLM Agents", "Scientific Discovery", "Multi-Agent"],
    abstract:
      "面向应用数学的推理密集型科学发现，构建知识驱动的多智能体系统：以可审计的理论推理、自动化知识检索与自我改进机制，在单一系统内完成从理论推导到实证验证的全流程。",
    links: {
      pdf: "https://arxiv.org/abs/2607.14178",
      code: "",
      project: "",
    },
  },
];

// 📄 你的论文列表：以后加论文，只要往这个数组里加一项即可。
// authors 里可以用 **粗体** 标注你自己（页面会渲染成加粗）。
// links 里的字段都是可选的，没有就删掉那一行。
export const papers = [
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
    authors: "Yuxi Liu, **Zekun Zhang**, Yaxiang Cai, Ranjia Deng, Yutong He, Kun Yuan",
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
      "Yutong He, Daibo Li, Guohong Li, Jiane Geng, Zhengyang Huang, Can Ren, **Zekun Zhang**, Yifan Liu, Shuchen Zhu, Hengrui Zheng, Boao Kong, Ming Sun, Shu Li, Chenyi Li, Jiang Hu, Kun Yuan, Zaiwen Wen, Pingwen Zhang",
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

export const interestOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export const qualificationOptions = [
  { value: "ssce", label: "SSCE" },
  { value: "nd", label: "ND" },
  { value: "hnd", label: "HND" },
  { value: "bsc", label: "BSC" },
  { value: "masters", label: "Masters" },
  { value: "phd", label: "Phd" }
];

export const institutionOptions = [
  {
    value: "fpi",
    label: "The Federal Polytechnic, Ilaro",
    type: 2
  },
  {
    value: "funaab",
    label: "The Federal University of Agriculture, Abeokuta",
    type: 1
  }
];

export const tagOptions = [];

export const uniLevels = [
  { value: "100", label: "100L" },
  { value: "200", label: "200L" }
];

export const polyLevels = [
  { value: "nd1", label: "ND I" },
  { value: "nd2", label: "ND II" }
];

export const timeLineQuestions = [
  {
    title:
      "voluptates quis. Explicabo autem quae vero dolorem repellat sit, ratione eos incidunt.",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          veritatis repellendus corporis quos vitae asperiores itaque distinctio
          cum voluptates quis. Explicabo autem quae vero dolorem repellat sit,
          ratione eos incidunt.`,
    tags: [
      { name: "chemistry", slug: "/tag/chemistry" },
      { name: "Organic Chemistry", slug: "/tag/organic-chemistry" }
    ],
    slug: "/post/1",
    user: {
      username: "Cradoe",
      slug: "/profile/cradoe"
    },
    timestamp: 58060800,
    impacts: 44
  },
  {
    title:
      "voluptates quis. Explicabo autem quae vero dolorem repellat sit, ratione eos incidunt.",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          veritatis repellendus corporis quos vitae asperiores itaque distinctio
          cum voluptates quis. Explicabo autem quae vero dolorem repellat sit,
          ratione eos incidunt.`,
    tags: [
      { name: "chemistry", slug: "/tag/chemistry" },
      { name: "Organic Chemistry", slug: "/tag/organic-chemistry" }
    ],
    slug: "/post/1",
    user: {
      username: "Cradoe",
      slug: "/profile/cradoe"
    },
    timestamp: 58060800000,
    impacts: 44
  },
  {
    title:
      "voluptates quis. Explicabo autem quae vero dolorem repellat sit, ratione eos incidunt.",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          veritatis repellendus corporis quos vitae asperiores itaque distinctio
          cum voluptates quis. Explicabo autem quae vero dolorem repellat sit,
          ratione eos incidunt.`,
    tags: [
      { name: "chemistry", slug: "/tag/chemistry" },
      { name: "Organic Chemistry", slug: "/tag/organic-chemistry" }
    ],
    slug: "/post/1",
    user: {
      username: "Cradoe",
      slug: "/profile/cradoe"
    },
    timestamp: 24 * 60 * 1000,
    impacts: 44
  }
];

export const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 0
});

export const plans = [
  {
    id: 1,
    name: "Basic",
    ribbon_value: "Beginner",
    description: "Conservative learners start here.",
    features: [
      "Ask any question in your category for 2 weeks.",
      "Access to only your questions and solutions.",
      "Access to our learning community.",
      "Ask a total of 5 questions."
    ],
    price: 1999,
    color: "red"
  },
  {
    id: 2,
    name: "Gold",
    ribbon_value: "Gold",
    description: "Get our basic offerings here.",
    features: [
      "Ask any question in your category for 2 weeks.",
      "Access to only your questions and solutions.",
      "Access to our learning community.",
      "Ask a total of 7 questions.",
      "1GB of Data plan on every subscription."
    ],
    price: 2999,
    color: "gold"
  },
  {
    id: 3,
    name: "Guru",
    ribbon_value: "Platinum",
    description: "Get the most of our offers, unlimited.",
    features: [
      "Ask any question in your category for 4 weeks.",
      "Access to only your questions and solutions.",
      "Access to our learning community.",
      "Ask a total of 10 questions.",
      "Access to all questions and soluitons in category.",
      "2GB of Data plan on every subscription."
    ],
    price: 4999,
    color: "orange"
  }
];

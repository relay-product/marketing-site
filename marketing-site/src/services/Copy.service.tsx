type Description = { headerText: string; bodyText: string };
const DESCRIPTIONS: Description[] = [
  {
    headerText: "Strategy",
    bodyText:
      "We’re strategic executors from discovery to go-to-market. Good product is the optimal path between a well-understood problem and a clearly-defined business outcome. ",
  },
  {
    headerText: "UI/UX Design",
    bodyText:
      "Design is how we translate user insights into solutions. We iterate design through validated learning. Our philosophy is to create straightforward, functional experiences.",
  },
  {
    headerText: "Full Stack Engineering",
    bodyText:
      "We’re builders at heart. With experience in startups, big tech, and consulting, we deliver quickly, continuously, and iteratively to build fully functional vertical slices for your users.",
  },
];

export const getDescriptions = (
  capabilityText:
    | "Strategy"
    | "UI/UX Design"
    | "Full Stack Engineering"
    | undefined
) => {
  return capabilityText
    ? DESCRIPTIONS.filter(
        (description) => description.headerText == capabilityText
      )[0].bodyText
    : null;
};

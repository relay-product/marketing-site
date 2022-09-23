type Description = { headerText: string; bodyText: string };
const DESCRIPTIONS: Description[] = [
  {
    headerText: "Strategy",
    bodyText:
      "We take our strategy seriously. Strategy is something we do best. ",
  },
  {
    headerText: "UI/UX Design",
    bodyText:
      "From discovery to delivery we incorporate UX at every stage of the process",
  },
  {
    headerText: "Full Stack Engineering",
    bodyText:
      "We bring ideas to life in vertical slices to create a fully functional experience for your users",
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

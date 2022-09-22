type Description = { headerText: string; bodyText: string };
const DESCRIPTIONS: Description[] = [
  { headerText: "Strategy", bodyText: "Lorem" },
  { headerText: "UI/UX Design", bodyText: "Lorem" },
  { headerText: "Full Stack Development", bodyText: "Lorem" },
];

export const getDescriptions = () => {
  return DESCRIPTIONS;
};

export const dailyUpdatesKeys = {
	all: ["daily-updates"] as const,
	lists: () => [...dailyUpdatesKeys.all, "list"] as const,
};

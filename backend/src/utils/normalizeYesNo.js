export const normalizeYesNo = (text = "") => {
  const clean = text.trim().toLowerCase();
  if (clean.startsWith("yes")) return "YES";
  if (clean.startsWith("no")) return "NO";
  return "YES"; // fail-open (never reject by mistake)
};

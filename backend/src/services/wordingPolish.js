export const polishText = (text = "") => {
  return text
    /* ----------------------------
       Hunger & satiety (behavioral)
    ----------------------------- */
    .replace(/can make you feel hungry again quickly/gi, "pushes hunger back sooner")
    .replace(/quickly digested sugars can leave you hungry sooner/gi, "pushes hunger back sooner")
    .replace(/doesn't keep you feeling full or satisfied for long/gi, "doesn’t hold hunger back for long")
    .replace(/offers little to keep you feeling satisfied/gi, "doesn’t help you stay full")

    /* ----------------------------
       Kill label-reading / education
    ----------------------------- */
    .replace(
      /high on the list, meaning they contribute significantly to the product's sweetness and calorie content/gi,
      "they drive cravings without lasting fullness"
    )
    .replace(
      /quickly converts to sugar in your body, similar to the primary concern/gi,
      "reinforces quick hunger return"
    )

    /* ----------------------------
       Sugar phrasing (compressed)
    ----------------------------- */
    .replace(/high sugar content/gi, "a sugar-heavy recipe")
    .replace(/quick sugars/gi, "fast sugars")

    /* ----------------------------
       Frequency & habit framing
    ----------------------------- */
    .replace(/less suitable for frequent consumption/gi, "better kept as a treat")
    .replace(/acceptable as an occasional/gi, "fine once in a while")
    .replace(/enjoy as an occasional treat, not a daily habit/gi, "treat only, not part of your routine")
    .replace(/choose this as an occasional treat/gi, "treat only, not a routine snack")

    /* ----------------------------
       Energy language (less explainer)
    ----------------------------- */
    .replace(/provides a fast energy burst/gi, "fills you briefly")
    .replace(
      /will give a quick burst of energy, but it often leads to feeling hungry again sooner/gi,
      "fills you briefly, then leaves you hungry again"
    )
    .replace(/offers quick energy without lasting fullness/gi, "adds calories without lasting fullness");
};

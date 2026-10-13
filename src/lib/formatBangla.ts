// Convert numbers to Bengali numerals
export const formatBanglaNumber = (value: number) => {
  return value.toLocaleString("bn-BD", {
    maximumFractionDigits: 2,
  });
};

// Translate known English text into Bengali
const banglaTranslations: Record<string, string> = {
  // Divisions
  Dhaka: "ঢাকা",
  Chattogram: "চট্টগ্রাম",
  Chittagong: "চট্টগ্রাম",
  Rajshahi: "রাজশাহী",
  Khulna: "খুলনা",
  Barishal: "বরিশাল",
  Barisal: "বরিশাল",
  Sylhet: "সিলেট",
  Rangpur: "রংপুর",
  Mymensingh: "ময়মনসিংহ",

  // Common units
  kg: "কেজি",
  g: "গ্রাম",
  litre: "লিটার",
  liter: "লিটার",
  pcs: "পিস",
  dozen: "ডজন",
  piece: "পিস",
};

export const formatBanglaText = (text: string) => {
  return banglaTranslations[text.trim()] ?? text;
};

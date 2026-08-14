import type { Question } from '../../../types';

export const MATHEMATICS_QUESTIONS: Question[] = [
  {
    "id": "ge-math-001",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Number Theory & Arithmetic",
    "question": "What is the Greatest Common Factor (GCF) and Least Common Multiple (LCM) of 24 and 36 respectively?",
    "choices": [
      "GCF = 12, LCM = 72",
      "GCF = 6, LCM = 72",
      "GCF = 12, LCM = 144",
      "GCF = 4, LCM = 72"
    ],
    "answer": 0,
    "explanation": "Prime factorizations: 24 = 2³ × 3; 36 = 2² × 3². GCF = 2² × 3 = 12. LCM = 2³ × 3² = 8 × 9 = 72.",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-002",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Algebra & Linear Equations",
    "question": "If 3x - 7 = 20, what is the value of 2x + 5?",
    "choices": [
      "18",
      "23",
      "27",
      "14"
    ],
    "answer": 1,
    "explanation": "Solve for x: 3x = 27 -> x = 9. Substitute x into 2x + 5: 2(9) + 5 = 18 + 5 = 23.",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-003",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Statistics & Probability",
    "question": "A bag contains 5 red, 7 blue, and 8 green marbles. If a marble is drawn at random, what is the probability of drawing either a red or blue marble?",
    "choices": [
      "1/2 (50%)",
      "12/20 (60%)",
      "3/5 (60%)",
      "7/20 (35%)"
    ],
    "answer": 2,
    "explanation": "Total marbles = 5 + 7 + 8 = 20. Favorable outcomes (red or blue) = 5 + 7 = 12. P(Red or Blue) = 12/20 = 3/5 (60%).",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-004",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Geometry & Measurement",
    "question": "A right circular cylinder has a base radius of 7 cm and a height of 10 cm. Using π ≈ 22/7, calculate its total volume.",
    "choices": [
      "770 cm³",
      "2,200 cm³",
      "1,240 cm³",
      "1,540 cm³"
    ],
    "answer": 3,
    "explanation": "Volume of cylinder = πr²h. V = (22/7) × (7)² × 10 = (22/7) × 49 × 10 = 22 × 7 × 10 = 1,540 cm³.",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-005",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Number Theory & Arithmetic",
    "question": "A store offers a 20% discount on a laptop originally priced at ₱25,000. If an additional 5% loyalty discount is applied to the discounted price, what is the final selling price?",
    "choices": [
      "₱19,000",
      "₱18,750",
      "₱19,500",
      "₱20,000"
    ],
    "answer": 0,
    "explanation": "First discount: ₱25,000 × (1 - 0.20) = ₱20,000. Second discount: ₱20,000 × (1 - 0.05) = ₱19,000. (Note: Successive discounts are multiplicative, not additive 25%).",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-006",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Algebra & Linear Equations",
    "question": "The sum of three consecutive odd integers is 87. What is the value of the largest integer in the set?",
    "choices": [
      "27",
      "31",
      "29",
      "33"
    ],
    "answer": 1,
    "explanation": "Let consecutive odd integers be x, x+2, x+4. Sum: x + (x+2) + (x+4) = 87 -> 3x + 6 = 87 -> 3x = 81 -> x = 27. The integers are 27, 29, and 31. The largest is 31.",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-007",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Geometry & Measurement",
    "question": "A right triangle has legs of length 9 cm and 12 cm. What is the length of its hypotenuse and its area?",
    "choices": [
      "Hypotenuse = 15 cm; Area = 108 cm²",
      "Hypotenuse = 21 cm; Area = 54 cm²",
      "Hypotenuse = 15 cm; Area = 54 cm²",
      "Hypotenuse = 16 cm; Area = 72 cm²"
    ],
    "answer": 2,
    "explanation": "By Pythagorean Theorem: c² = 9² + 12² = 81 + 144 = 225 -> c = 15 cm. Area = 1/2 × base × height = 1/2 × 9 × 12 = 54 cm².",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-008",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Statistics & Probability",
    "question": "What is the median of the following set of scores: 14, 22, 9, 18, 25, 14, 30, 12?",
    "choices": [
      "14",
      "18",
      "15.5",
      "16"
    ],
    "answer": 3,
    "explanation": "First, arrange data in ascending order: 9, 12, 14, 14, 18, 22, 25, 30 (n = 8). Since n is even, median is the average of the 4th and 5th values: (14 + 18) / 2 = 32 / 2 = 16.",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-009",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Number Theory & Arithmetic",
    "question": "If 8 men can paint a school building in 15 days, how many days will it take 12 men to finish the same paint job working at the exact same rate?",
    "choices": [
      "10 days",
      "12 days",
      "22.5 days",
      "9 days"
    ],
    "answer": 0,
    "explanation": "This is an inverse proportion: Men × Days = Total Man-days. Total work = 8 × 15 = 120 man-days. Days for 12 men = 120 / 12 = 10 days.",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-010",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Algebra & Linear Equations",
    "question": "Solve for x: 2(x + 4) - 3(x - 2) = 18",
    "choices": [
      "4",
      "-4",
      "-2",
      "6"
    ],
    "answer": 1,
    "explanation": "Expand: 2x + 8 - 3x + 6 = 18 -> -x + 14 = 18 -> -x = 4 -> x = -4.",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-011",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Number Theory & Arithmetic",
    "question": "What is 35% of ₱8,400?",
    "choices": [
      "₱2,840",
      "₱3,140",
      "₱2,940",
      "₱2,740"
    ],
    "answer": 2,
    "explanation": "35% of 8,400 = 0.35 × 8,400 = 2,940.",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-012",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Number Theory & Arithmetic",
    "question": "How many prime numbers are there between 20 and 50?",
    "choices": [
      "6 (23, 29, 31, 37, 41, 43, 47)",
      "8 (23, 27, 29, 31, 37, 41, 43, 47)",
      "5 (23, 29, 31, 41, 47)",
      "7 (23, 29, 31, 37, 41, 43, 47)"
    ],
    "answer": 3,
    "explanation": "The prime numbers between 20 and 50 are: 23, 29, 31, 37, 41, 43, and 47 (total = 7 prime numbers). Note: 27 is divisible by 3 and 9.",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-013",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Algebra & Linear Equations",
    "question": "A father is currently 3 times as old as his son. In 12 years, the father will be twice as old as his son. What is the son's present age?",
    "choices": [
      "12 years old",
      "10 years old",
      "14 years old",
      "16 years old"
    ],
    "answer": 0,
    "explanation": "Let son's current age = s; father's age = 3s. In 12 years: 3s + 12 = 2(s + 12) -> 3s + 12 = 2s + 24 -> s = 12 years old. The father is currently 36.",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-014",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Algebra & Linear Equations",
    "question": "What are the roots (solutions) of the quadratic equation x² - 7x + 12 = 0?",
    "choices": [
      "x = -3 and x = -4",
      "x = 3 and x = 4",
      "x = 2 and x = 6",
      "x = -2 and x = -6"
    ],
    "answer": 1,
    "explanation": "Factor the quadratic: (x - 3)(x - 4) = 0. Therefore, x = 3 or x = 4.",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-015",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Geometry & Measurement",
    "question": "What is the sum of the interior angles of a regular hexagon (6-sided polygon)?",
    "choices": [
      "540°",
      "900°",
      "720°",
      "1,080°"
    ],
    "answer": 2,
    "explanation": "Formula for the sum of interior angles of an n-sided polygon: S = (n - 2) × 180°. For a hexagon (n = 6): S = (6 - 2) × 180° = 4 × 180° = 720°.",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-016",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Geometry & Measurement",
    "question": "If the perimeter of a square is 48 meters, what is the area of the square?",
    "choices": [
      "96 m²",
      "120 m²",
      "196 m²",
      "144 m²"
    ],
    "answer": 3,
    "explanation": "Perimeter P = 4s = 48 -> side s = 12 m. Area A = s² = (12)² = 144 m².",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-017",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Geometry & Measurement",
    "question": "Two complementary angles have measures in the ratio 2:3. What is the measure of the larger angle?",
    "choices": [
      "54°",
      "36°",
      "72°",
      "108°"
    ],
    "answer": 0,
    "explanation": "Complementary angles add up to 90°. Ratio 2x + 3x = 90 -> 5x = 90 -> x = 18. The angles are 2(18) = 36° and 3(18) = 54°. The larger angle is 54°.",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-018",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Statistics & Probability",
    "question": "In how many different ways can a teacher arrange 5 students in a single line for a photo?",
    "choices": [
      "24",
      "120",
      "60",
      "720"
    ],
    "answer": 1,
    "explanation": "The number of permutations of 5 distinct items in a row is 5! = 5 × 4 × 3 × 2 × 1 = 120 ways.",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-019",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Statistics & Probability",
    "question": "In how many ways can a committee of 3 teachers be selected from a department of 8 teachers?",
    "choices": [
      "24",
      "336",
      "56",
      "120"
    ],
    "answer": 2,
    "explanation": "Since order does not matter, use combination C(8, 3) = 8! / (3! × 5!) = (8 × 7 × 6) / (3 × 2 × 1) = 56 ways.",
    "difficulty": "hard"
  },
  {
    "id": "ge-math-020",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Statistics & Probability",
    "question": "A fair pair of standard 6-sided dice is rolled. What is the probability of rolling a sum of 7?",
    "choices": [
      "1/12",
      "7/36",
      "5/36",
      "1/6"
    ],
    "answer": 3,
    "explanation": "Total outcomes = 6 × 6 = 36. Outcomes with sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> 6 outcomes. P(sum 7) = 6/36 = 1/6.",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-021",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Number Theory & Arithmetic",
    "question": "Convert the decimal 0.375 into its simplest fractional form:",
    "choices": [
      "3/8",
      "37/100",
      "7/16",
      "5/12"
    ],
    "answer": 0,
    "explanation": "0.375 = 375/1000. Divide numerator and denominator by 125 (their GCF): 375/125 = 3, 1000/125 = 8 -> 3/8.",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-022",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Number Theory & Arithmetic",
    "question": "A principal deposits ₱50,000 in a savings account yielding 6% simple annual interest. How much interest will be earned after 3 years?",
    "choices": [
      "₱6,000",
      "₱9,000",
      "₱12,000",
      "₱15,000"
    ],
    "answer": 1,
    "explanation": "Simple interest formula: I = P × r × t = ₱50,000 × 0.06 × 3 = ₱9,000.",
    "difficulty": "easy"
  },
  {
    "id": "ge-math-023",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Algebra & Linear Equations",
    "question": "Simplify the algebraic expression: (2x²y³)² × (3xy²)",
    "choices": [
      "6x⁴y⁷",
      "12x⁴y⁸",
      "12x⁵y⁸",
      "18x⁵y⁶"
    ],
    "answer": 2,
    "explanation": "(2x²y³)² = 4x⁴y⁶. Multiply with (3xy²): 4 × 3 = 12; x⁴ × x¹ = x⁵; y⁶ × y² = y⁸ -> 12x⁵y⁸.",
    "difficulty": "hard"
  },
  {
    "id": "ge-math-024",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Geometry & Measurement",
    "question": "A rectangular garden has a length of 15 meters and a width of 8 meters. What is the diagonal distance across the garden from one corner to the opposite corner?",
    "choices": [
      "16 meters",
      "19 meters",
      "23 meters",
      "17 meters"
    ],
    "answer": 3,
    "explanation": "Using the Pythagorean theorem for the rectangle diagonal: d² = 15² + 8² = 225 + 64 = 289 -> d = √289 = 17 meters.",
    "difficulty": "medium"
  },
  {
    "id": "ge-math-025",
    "subjectId": "gen-math",
    "subjectName": "Mathematics",
    "category": "gen_ed",
    "topic": "Statistics & Probability",
    "question": "The mean of 5 numbers is 20. If a 6th number equal to 32 is added to the set, what is the new mean of the 6 numbers?",
    "choices": [
      "22",
      "21",
      "24",
      "26"
    ],
    "answer": 0,
    "explanation": "Initial sum = 5 × 20 = 100. New sum after adding 32 = 100 + 32 = 132. New mean = 132 / 6 = 22.",
    "difficulty": "medium"
  }
];

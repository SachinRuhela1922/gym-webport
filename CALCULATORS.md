# FitFlow Calculators - Complete Implementation

## Overview
The FitFlow fitness platform now features three powerful, scientifically-backed calculators integrated into the landing page and available as dedicated standalone pages. All calculators use industry-standard formulas and provide instant, accurate results.

## Three Main Calculators

### 1. BMI Calculator
**Route:** `/calculators/bmi`

**Purpose:** Calculate Body Mass Index to determine weight status and health category.

**Features:**
- Simple height (cm) and weight (kg) inputs
- Instant BMI calculation using the formula: BMI = weight (kg) / (height (m))²
- Real-time category classification:
  - **Underweight:** < 18.5
  - **Normal Weight:** 18.5 - 24.9
  - **Overweight:** 25 - 29.9
  - **Obese:** ≥ 30
- Educational information about BMI as a health screening tool
- Color-coded results for easy interpretation

**Formula Used:** WHO Standard BMI Formula

---

### 2. Daily Calorie Calculator (TDEE)
**Route:** `/calculators/calories`

**Purpose:** Determine Total Daily Energy Expenditure (TDEE) based on personal metrics and activity level.

**Features:**
- Input fields for:
  - Age (years)
  - Gender (Male/Female)
  - Weight (kg)
  - Height (cm)
  - Activity Level (5 levels from Sedentary to Extra Active)
- Uses Mifflin-St Jeor equation for accurate BMR/TDEE calculation
- Activity level multipliers:
  - Sedentary: 1.2 (little or no exercise)
  - Light: 1.375 (1-3 days/week)
  - Moderate: 1.55 (3-5 days/week)
  - Very Active: 1.725 (6-7 days/week)
  - Extra Active: 1.9 (2x per day intense)
- Personalized recommendations for:
  - Weight loss: TDEE - 300-500 calories
  - Weight maintenance: TDEE
  - Muscle gain: TDEE + 300-500 calories

**Formula Used:** Mifflin-St Jeor Equation (most accurate for average population)

---

### 3. Macronutrient Calculator (Macro Split)
**Route:** `/calculators/macros`

**Purpose:** Calculate optimal macronutrient ratios (Protein, Carbs, Fats) based on fitness goals.

**Features:**
- Input: Daily caloric intake
- Fitness goal selection:
  - **Fat Loss:** P: 40% | C: 35% | F: 25%
  - **Maintenance:** P: 30% | C: 40% | F: 30%
  - **Muscle Gain:** P: 35% | C: 45% | F: 20%
- Pre-configured macro ratios for popular diets:
  - Balanced: P: 30% | C: 40% | F: 30%
  - Muscle Gain: P: 35% | C: 45% | F: 20%
  - Fat Loss: P: 40% | C: 35% | F: 25%
  - Keto: P: 25% | C: 5% | F: 70%
- Detailed explanations for each macronutrient:
  - **Protein:** 4 cal/gram - Builds & repairs muscle
  - **Carbs:** 4 cal/gram - Provides energy
  - **Fats:** 9 cal/gram - Supports hormones & health

---

## Landing Page Integration

### New Section: "Fitness Calculators"
**Location:** Between Services and Programs sections

The calculators are featured in an attractive card-based section with:
- Eye-catching emoji icons (📊 BMI | 🔥 Daily Calories | 🥗 Macro Split)
- Clear descriptions of each calculator's purpose
- Direct links to dedicated calculator pages
- "Try Calculator" call-to-action buttons
- Hover effects and smooth transitions
- Responsive grid layout (1 column mobile, 3 columns desktop)

---

## Technical Implementation

### File Structure
```
/app
  /calculators
    /bmi
      page.tsx           # BMI Calculator page
    /calories
      page.tsx           # Daily Calories Calculator page
    /macros
      page.tsx           # Macro Calculator page

/components
  /tools
    BMICalculator.tsx            # BMI component
    CalorieCalculator.tsx        # Calorie component
    MacroCalculator.tsx          # Macro component
  CalculatorsSection.tsx         # Landing page section
```

### Component Features
- **Client-side rendering:** All calculations happen instantly in the browser
- **Real-time feedback:** Results update as users input data
- **Responsive design:** Mobile-first approach works on all devices
- **Accessible:** Proper labels, ARIA attributes, and semantic HTML
- **Styled consistently:** Uses FitFlow's dark theme with Neon Blue accents

### Routes
- **Landing Page:** `/` - Features calculator cards in Fitness Calculators section
- **BMI Calculator:** `/calculators/bmi` - Dedicated page with educational content
- **Calorie Calculator:** `/calculators/calories` - Dedicated page with activity level info
- **Macro Calculator:** `/calculators/macros` - Dedicated page with macro ratio examples

---

## User Experience Flow

1. **Discovery:** User sees calculator cards on landing page
2. **Engagement:** Hovers over card to see more details
3. **Navigation:** Clicks "Try Calculator" to visit dedicated page
4. **Education:** Reads helpful information on the dedicated page
5. **Calculation:** Inputs personal data and gets instant results
6. **Action:** Uses results to inform fitness decisions

---

## Scientific Accuracy

All calculators use industry-standard formulas trusted by:
- Fitness professionals
- Nutritionists
- Healthcare providers
- Fitness researchers

### Disclaimer Note
Results are estimates and should not replace professional medical or nutritional advice.

---

## Future Enhancements

1. **Save Results:** Store calculator history (requires authentication)
2. **Comparison:** Compare results over time
3. **Export:** Generate PDF reports
4. **Advanced Options:** More granular activity level categories
5. **Integration:** Connect with meal planning and workout tracking
6. **API:** Expose calculator APIs for mobile apps

---

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

All calculators are fully responsive and work seamlessly on mobile, tablet, and desktop devices.

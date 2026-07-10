# FitFlow - Premium AI-Powered Fitness Platform

A cutting-edge fitness platform combining personalized AI coaching, advanced calculators, expert trainers, and an extensive resource library. Built with Next.js 16, TypeScript, and powered by Claude AI.

## 🚀 Features

### Landing Page
- **Premium Dark Mode Design** - Sleek, modern interface with glassmorphism effects
- **Navigation System** - Smooth scrolling with mobile-responsive menu
- **Hero Section** - Animated background with particle effects
- **Service Cards** - 6 premium fitness services
- **Training Programs** - Beginner, Intermediate, Advanced programs with pricing
- **Expert Trainers** - Featured trainers with ratings and reviews
- **Pricing Tiers** - Starter, Pro, Elite membership options
- **Testimonials** - Real success stories from members
- **FAQ Section** - Common questions answered
- **CTA Sections** - Multiple call-to-action conversion points
- **Footer** - Links, newsletter signup, social media

### Fitness Tools & Calculators
Located at `/tools` - 6 interactive tools:
1. **BMI Calculator** - Body Mass Index calculation with health categories
2. **Calorie Calculator** - Daily caloric needs using Mifflin-St Jeor equation
3. **Macro Calculator** - Optimal macronutrient ratios for your goals
4. **Body Fat Calculator** - U.S. Navy method body fat percentage estimation
5. **Workout Timer** - HIIT timer with configurable work/rest intervals
6. **Progress Tracker** - Track measurements over time with trend analysis

### AI-Powered Features
Located at `/ai` - Three intelligent coaching tools:

#### AI Diet Planner
- Personalized meal plans based on age, weight, height, goals
- Dietary preference customization (Balanced, Low-Carb, Keto, Vegan, etc.)
- Allergies and restriction handling
- Daily caloric breakdown
- Shopping list recommendations
- Meal prep tips

#### AI Workout Planner
- Customized programs for fitness level and goals
- Equipment-based adaptations
- Injury considerations
- Progressive overload strategy
- Form guidance and tips
- Performance metrics tracking

#### Fitness Chatbot
- 24/7 coaching support
- Real-time fitness advice
- Streaming responses for natural conversation
- Motivational support
- Recovery guidance

### Forms & Placeholders
- **Signup Page** - Multi-step form (personal info → security → confirmation)
- **Login Placeholder** - Ready for auth integration
- **Membership CTA** - Throughout the platform

## 🛠 Technology Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling with custom theme
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **SWR** - Data fetching

### Backend & Integration
- **AI SDK 7.0** - Vercel's AI integration layer
- **OpenAI API** - Claude models for AI features
- **Next.js API Routes** - Streaming responses for AI

### Design System
- **Color Scheme**: Black (#0d0d0d), Charcoal (#1f1f1f), Neon Blue (#55b4ff)
- **Typography**: Inter font for clean, modern look
- **Spacing**: Tailwind scale (4px base unit)
- **Components**: Glassmorphism cards, gradient text, smooth transitions

## 📁 Project Structure

```
/app
  ├── page.tsx                    # Landing page
  ├── layout.tsx                  # Root layout with metadata
  ├── globals.css                 # Theme tokens & custom CSS
  ├── /tools                      # Fitness tools section
  │   └── page.tsx
  ├── /ai                         # AI coaching section
  │   └── page.tsx
  ├── /signup                     # Signup page
  │   └── page.tsx
  └── /api/ai                     # AI API routes
      ├── /diet-plan/route.ts
      ├── /workout-plan/route.ts
      └── /chatbot/route.ts

/components
  ├── Navigation.tsx              # Top nav with mobile menu
  ├── Hero.tsx                    # Landing hero with animation
  ├── Services.tsx                # 6 service cards
  ├── Programs.tsx                # Training programs grid
  ├── Trainers.tsx                # Featured trainers
  ├── Pricing.tsx                 # Pricing tiers
  ├── Testimonials.tsx            # Success stories
  ├── FAQ.tsx                     # Accordion Q&A
  ├── CTA.tsx                     # Call-to-action
  ├── Footer.tsx                  # Footer links & newsletter
  ├── /tools                      # Calculators
  │   ├── BMICalculator.tsx
  │   ├── CalorieCalculator.tsx
  │   ├── MacroCalculator.tsx
  │   ├── BodyFatCalculator.tsx
  │   ├── WorkoutTimer.tsx
  │   └── ProgressTracker.tsx
  └── /ai                         # AI components
      ├── DietPlannerAI.tsx
      ├── WorkoutPlannerAI.tsx
      └── FitnessChatbot.tsx
```

## 🎨 Design Highlights

- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Dark Mode First**: OLED-optimized dark theme
- **Neon Accents**: Primary brand color (neon blue) for CTAs and highlights
- **Smooth Animations**: Page transitions, scroll effects, interactive hover states
- **Mobile-First**: Responsive design from 375px to 1920px+
- **Semantic HTML**: Accessible landmark elements
- **Performance**: Optimized images, CSS animation, streaming AI responses

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
echo "OPENAI_API_KEY=your_api_key_here" > .env.local

# Run dev server
pnpm dev
```

Visit `http://localhost:3000`

## 🔌 Environment Setup

Create `.env.local`:
```
OPENAI_API_KEY=sk-...
```

The platform uses OpenAI's API for AI features. Get your API key from [OpenAI](https://platform.openai.com/api-keys).

## 📚 API Routes

### POST `/api/ai/diet-plan`
Generate personalized meal plans
- Request: age, weight, height, goal, dietPreference, restrictions
- Response: Streaming text with full meal plan

### POST `/api/ai/workout-plan`
Generate personalized workout programs
- Request: age, fitnessLevel, goal, daysPerWeek, equipment, injuries, experience
- Response: Streaming text with complete program

### POST `/api/ai/chatbot`
Chat with fitness coach
- Request: messages (conversation history), context
- Response: Streaming text with coaching response

## 🎯 Next Steps - Integration Ready

The platform is built with these integrations in mind:

### Authentication (Choose One)
- **Better Auth** + Neon PostgreSQL (recommended)
- **Supabase Auth** (alternative)
- **Next Auth** (traditional approach)

### Database (For Storing User Data)
- **Neon PostgreSQL** (recommended with Better Auth)
- **Supabase PostgreSQL**
- **MongoDB** (for NoSQL preference)

### Payment (For Memberships)
- **Stripe Checkout** - Membership subscriptions
- **Lemonsqueezy** - Alternative payment processor

### Deployment
- **Vercel** - Recommended, zero-config deployment
- **AWS** - For larger scale
- **Digital Ocean** - Cost-effective option

## 📈 Feature Roadmap

- [ ] User authentication system
- [ ] Progress history tracking in database
- [ ] Meal/workout plan saving and exporting
- [ ] Community features (leaderboards, challenges)
- [ ] Video workout library
- [ ] Wearable device integration
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard

## 🔐 Security Notes

- API keys stored in environment variables
- No sensitive data in frontend code
- Streaming responses for AI safety
- Form validation on client and server
- Ready for auth integration

## 📱 Responsive Design

- **Mobile** (375px): Full responsiveness with stacked layouts
- **Tablet** (768px): Optimized 2-column grids
- **Desktop** (1024px+): Full feature display with sidebars

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📄 License

This project is available for educational and commercial use.

## 🎓 Created With

- **Next.js** - React framework
- **Tailwind CSS** - Styling
- **AI SDK** - AI integration
- **TypeScript** - Type safety

---

**FitFlow** - Transform Your Body, Transform Your Life

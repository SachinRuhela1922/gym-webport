// Gym Classes Data
export interface GymClass {
  id: string
  name: string
  instructor: string
  schedule: {
    day: string
    time: string
    duration: number
  }[]
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  capacity: number
  enrolled: number
  description: string
  image: string
}

export const gymClasses: GymClass[] = [
  {
    id: 'hiit-1',
    name: 'High Intensity Interval Training',
    instructor: 'Marcus Johnson',
    schedule: [
      { day: 'Monday', time: '06:00 AM', duration: 45 },
      { day: 'Wednesday', time: '06:00 AM', duration: 45 },
      { day: 'Friday', time: '06:00 AM', duration: 45 },
    ],
    level: 'Advanced',
    capacity: 25,
    enrolled: 22,
    description: 'Intense cardio and strength intervals for maximum calorie burn',
    image: 'HIIT Training',
  },
  {
    id: 'yoga-1',
    name: 'Vinyasa Flow Yoga',
    instructor: 'Sarah Mitchell',
    schedule: [
      { day: 'Tuesday', time: '07:00 AM', duration: 60 },
      { day: 'Thursday', time: '07:00 AM', duration: 60 },
      { day: 'Saturday', time: '09:00 AM', duration: 60 },
    ],
    level: 'Beginner',
    capacity: 30,
    enrolled: 28,
    description: 'Flowing yoga practice connecting breath with movement',
    image: 'Yoga Flow',
  },
  {
    id: 'strength-1',
    name: 'Power Strength Training',
    instructor: 'David Chen',
    schedule: [
      { day: 'Monday', time: '05:30 PM', duration: 60 },
      { day: 'Wednesday', time: '05:30 PM', duration: 60 },
      { day: 'Friday', time: '05:30 PM', duration: 60 },
    ],
    level: 'Intermediate',
    capacity: 20,
    enrolled: 18,
    description: 'Build muscle and increase strength with compound exercises',
    image: 'Strength Training',
  },
  {
    id: 'spin-1',
    name: 'Spin & Burn',
    instructor: 'Jessica Rodriguez',
    schedule: [
      { day: 'Tuesday', time: '06:00 PM', duration: 45 },
      { day: 'Thursday', time: '06:00 PM', duration: 45 },
      { day: 'Saturday', time: '08:00 AM', duration: 45 },
    ],
    level: 'Intermediate',
    capacity: 35,
    enrolled: 32,
    description: 'High-energy indoor cycling with motivating music',
    image: 'Spin Class',
  },
  {
    id: 'boxing-1',
    name: 'Boxing Basics',
    instructor: 'Tony Williams',
    schedule: [
      { day: 'Monday', time: '07:00 PM', duration: 60 },
      { day: 'Wednesday', time: '07:00 PM', duration: 60 },
      { day: 'Saturday', time: '10:00 AM', duration: 60 },
    ],
    level: 'Beginner',
    capacity: 25,
    enrolled: 20,
    description: 'Learn boxing fundamentals and improve coordination',
    image: 'Boxing Training',
  },
  {
    id: 'pilates-1',
    name: 'Core Pilates',
    instructor: 'Emma Thompson',
    schedule: [
      { day: 'Tuesday', time: '10:00 AM', duration: 50 },
      { day: 'Thursday', time: '10:00 AM', duration: 50 },
      { day: 'Sunday', time: '10:00 AM', duration: 50 },
    ],
    level: 'Beginner',
    capacity: 20,
    enrolled: 19,
    description: 'Strengthen your core with controlled pilates movements',
    image: 'Pilates Class',
  },
]

// Equipment Data
export interface Equipment {
  id: string
  name: string
  category: string
  quantity: number
  condition: 'New' | 'Good' | 'Fair'
  description: string
}

export const equipment: Equipment[] = [
  {
    id: 'eq-1',
    name: 'Dumbbells (5kg - 50kg)',
    category: 'Free Weights',
    quantity: 100,
    condition: 'Good',
    description: 'Complete set of adjustable dumbbells for strength training',
  },
  {
    id: 'eq-2',
    name: 'Treadmills',
    category: 'Cardio',
    quantity: 8,
    condition: 'New',
    description: 'State-of-the-art motorized treadmills with digital displays',
  },
  {
    id: 'eq-3',
    name: 'Stationary Bikes',
    category: 'Cardio',
    quantity: 10,
    condition: 'Good',
    description: 'Indoor cycling bikes with resistance adjustment',
  },
  {
    id: 'eq-4',
    name: 'Barbell Set',
    category: 'Free Weights',
    quantity: 15,
    condition: 'Good',
    description: 'Olympic barbells with weight plates (20kg - 150kg)',
  },
  {
    id: 'eq-5',
    name: 'Rowing Machine',
    category: 'Cardio',
    quantity: 6,
    condition: 'New',
    description: 'Full-body cardio workout machines',
  },
  {
    id: 'eq-6',
    name: 'Chest Press Machine',
    category: 'Machine Weights',
    quantity: 4,
    condition: 'Good',
    description: 'Hydraulic chest press for upper body strength',
  },
  {
    id: 'eq-7',
    name: 'Leg Press Machine',
    category: 'Machine Weights',
    quantity: 3,
    condition: 'Good',
    description: 'Heavy-duty leg press machine',
  },
  {
    id: 'eq-8',
    name: 'Pull-up Bars',
    category: 'Calisthenics',
    quantity: 12,
    condition: 'Good',
    description: 'Adjustable pull-up and chin-up bars',
  },
]

// Transformation Stories
export interface Transformation {
  id: string
  name: string
  duration: string
  weightLoss: string
  image: string
  story: string
  startDate: string
  program: string
}

export const transformations: Transformation[] = [
  {
    id: 'tf-1',
    name: 'Alex Kumar',
    duration: '6 Months',
    weightLoss: '25 kg',
    image: 'Transformation 1',
    story: 'From sedentary lifestyle to fitness enthusiast. Lost 25kg and gained confidence through consistent training and proper nutrition guidance.',
    startDate: 'January 2024',
    program: 'Full Body Transformation',
  },
  {
    id: 'tf-2',
    name: 'Maria Santos',
    duration: '4 Months',
    weightLoss: '15 kg',
    image: 'Transformation 2',
    story: 'Determined mother of two achieved her fitness goals. Built lean muscle and improved overall health and energy levels.',
    startDate: 'March 2024',
    program: 'Women Strength Program',
  },
  {
    id: 'tf-3',
    name: 'James Wilson',
    duration: '8 Months',
    weightLoss: '35 kg',
    image: 'Transformation 3',
    story: 'Complete lifestyle change with dedicated personal training. Transformed body composition and now an inspiration to others.',
    startDate: 'September 2023',
    program: 'Intensive Body Recomposition',
  },
  {
    id: 'tf-4',
    name: 'Priya Patel',
    duration: '3 Months',
    weightLoss: '12 kg',
    image: 'Transformation 4',
    story: 'Quick results through HIIT classes and macro tracking. Achieved fitness goals faster than expected with expert guidance.',
    startDate: 'May 2024',
    program: 'HIIT Acceleration Program',
  },
]

// Blog Articles
export interface BlogArticle {
  id: string
  title: string
  author: string
  date: string
  category: string
  excerpt: string
  content: string
  image: string
  readTime: number
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'The Science Behind HIIT Training',
    author: 'Dr. Marcus Johnson',
    date: '2024-07-15',
    category: 'Training',
    excerpt: 'Discover how high-intensity interval training boosts metabolism and burns calories long after your workout.',
    content: `High-Intensity Interval Training (HIIT) has become increasingly popular in fitness circles, and for good reason. 
    
    The science is compelling: HIIT workouts cause an elevated metabolism for hours post-exercise, a phenomenon known as EPOC (Excess Post-Exercise Oxygen Consumption). This means your body continues to burn calories even after you've finished your workout.
    
    During HIIT sessions, you alternate between intense bursts of exercise and fixed periods of less-intense activity. This pattern forces your cardiovascular system to work harder, increasing both aerobic and anaerobic fitness.
    
    Studies show that HIIT can improve cardiovascular health, increase insulin sensitivity, and promote fat loss while preserving muscle mass. Sessions as short as 15-30 minutes can provide significant benefits.
    
    The key is consistency and proper form to avoid injury. Start with a qualified trainer to learn correct technique before pushing yourself harder.`,
    image: 'HIIT Science',
    readTime: 5,
  },
  {
    id: 'blog-2',
    title: 'Nutrition Guide: Macros for Muscle Building',
    author: 'Sarah Mitchell',
    date: '2024-07-10',
    category: 'Nutrition',
    excerpt: 'Learn how to balance your macronutrients for optimal muscle growth and recovery.',
    content: `Building muscle requires more than just hitting the gym. Proper nutrition is equally important in your fitness journey.
    
    The three macronutrients essential for muscle building are:
    
    Protein: The building blocks of muscle. Aim for 0.7-1 gram per pound of body weight daily.
    
    Carbohydrates: Provide energy for intense workouts and help with recovery through glycogen replenishment.
    
    Fats: Support hormone production and overall health. Don't fear healthy fats from avocados, nuts, and fish.
    
    Timing also matters. Consume protein within 30-60 minutes post-workout for optimal muscle protein synthesis.
    
    Individual needs vary based on body composition, activity level, and goals. Consider consulting with a nutritionist for personalized guidance.`,
    image: 'Nutrition Macros',
    readTime: 6,
  },
  {
    id: 'blog-3',
    title: 'Recovery Techniques: Rest Days Are Training',
    author: 'David Chen',
    date: '2024-07-05',
    category: 'Recovery',
    excerpt: 'Master the art of recovery to prevent burnout and maximize your fitness gains.',
    content: `Many fitness enthusiasts focus solely on training intensity, overlooking the crucial role of recovery in achieving results.
    
    Active Recovery: Light activities like walking, swimming, or yoga on rest days promote blood flow without taxing your system.
    
    Sleep: Aim for 7-9 hours nightly. During sleep, your body repairs muscle tissue and releases growth hormone.
    
    Nutrition: Proper post-workout meals accelerate recovery. Include protein and carbs within your post-exercise window.
    
    Stretching & Foam Rolling: These practices reduce muscle soreness and improve flexibility.
    
    Cold Therapy: Ice baths and cold showers may reduce inflammation, though the science is still evolving.
    
    Listen to your body. Signs of overtraining include persistent fatigue, decreased performance, and mood changes.`,
    image: 'Recovery Tech',
    readTime: 7,
  },
  {
    id: 'blog-4',
    title: 'Women in Fitness: Breaking Myths and Building Strength',
    author: 'Jessica Rodriguez',
    date: '2024-06-28',
    category: 'Lifestyle',
    excerpt: 'Debunk common fitness myths and discover why strength training is perfect for every woman.',
    content: `Women often hesitate to start strength training due to myths about bulking up or losing femininity. Let's set the record straight.
    
    Myth 1: Lifting heavy makes women bulky.
    Reality: Building significant muscle requires specific programming, caloric surplus, and time. Women naturally have lower testosterone levels, making it harder to build mass.
    
    Myth 2: Cardio is better for weight loss than strength training.
    Reality: Strength training builds lean muscle, which increases resting metabolic rate. Combined with cardio, it's highly effective.
    
    Myth 3: Women should only use light weights.
    Reality: Progressive overload applies to everyone. Lifting appropriately heavy weight is safe and effective for all genders.
    
    Benefits of strength training for women include improved bone density, better posture, increased confidence, and metabolic health.
    
    Start with a certified trainer to learn proper form and develop a personalized program.`,
    image: 'Women Fitness',
    readTime: 5,
  },
  {
    id: 'blog-5',
    title: 'Meal Prep 101: Simple Strategies for Busy People',
    author: 'Emma Thompson',
    date: '2024-06-20',
    category: 'Nutrition',
    excerpt: 'Save time and stay on track with simple meal prep strategies that fit your lifestyle.',
    content: `Consistency in nutrition is key to fitness success. Meal prep removes barriers to healthy eating.
    
    Step 1: Plan Your Week
    Decide on 3-4 meals you'll repeat. Simplicity aids consistency.
    
    Step 2: Create a Shopping List
    Organize by store sections. This saves time and prevents impulse purchases.
    
    Step 3: Prep Your Proteins
    Grill chicken breasts, bake fish, or slow-cook lean beef in bulk. Store in portions.
    
    Step 4: Prepare Base Grains
    Cook rice, quinoa, or oats in large batches. These are your carb foundation.
    
    Step 5: Chop Vegetables
    Pre-cut vegetables for salads, stir-fries, and sides. Fresh and convenient.
    
    Step 6: Store Properly
    Use glass containers and label with prep date. Most meals last 3-4 days refrigerated.
    
    Pro tip: Dedicate 2-3 hours on Sunday for weekly prep. The time investment saves hours during the week.`,
    image: 'Meal Prep',
    readTime: 5,
  },
]

// Membership Tiers
export interface MembershipTier {
  id: string
  name: string
  price: number
  duration: string
  features: string[]
  highlighted: boolean
}

export const membershipTiers: MembershipTier[] = [
  {
    id: 'starter',
    name: 'Starter Pass',
    price: 29,
    duration: 'per month',
    features: [
      'Gym access during peak hours',
      'Access to basic equipment',
      'Community events',
      'Mobile app',
    ],
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro Membership',
    price: 59,
    duration: 'per month',
    features: [
      '24/7 gym access',
      'All classes included',
      'Personal training sessions (2/month)',
      'Nutrition consultation',
      'Priority equipment booking',
      'Mobile app + Wearable sync',
    ],
    highlighted: true,
  },
  {
    id: 'elite',
    name: 'Elite Package',
    price: 99,
    duration: 'per month',
    features: [
      '24/7 gym access',
      'Unlimited classes',
      'Unlimited personal training',
      'One-on-one nutrition planning',
      'Recovery services (massage, sauna)',
      'Guest privileges',
      'Priority equipment access',
      'Mobile app + Premium features',
    ],
    highlighted: false,
  },
]

// Gym Locations
export interface Location {
  id: string
  name: string
  address: string
  city: string
  phone: string
  email: string
  hours: string
  amenities: string[]
}

export const locations: Location[] = [
  {
    id: 'loc-1',
    name: 'Downtown Fitness Hub',
    address: '123 Main Street',
    city: 'New York, NY',
    phone: '+1 (555) 123-4567',
    email: 'downtown@fitflow.com',
    hours: '24/7',
    amenities: ['Gym Floor', 'Free Weights', 'Cardio Equipment', 'Classes', 'Café', 'Parking'],
  },
  {
    id: 'loc-2',
    name: 'Westside Strength Center',
    address: '456 Park Avenue',
    city: 'Los Angeles, CA',
    phone: '+1 (555) 234-5678',
    email: 'westside@fitflow.com',
    hours: '5:00 AM - 11:00 PM',
    amenities: ['Gym Floor', 'Olympic Platform', 'Machines', 'Classes', 'Recovery Area'],
  },
  {
    id: 'loc-3',
    name: 'Midtown Wellness Center',
    address: '789 Market Street',
    city: 'San Francisco, CA',
    phone: '+1 (555) 345-6789',
    email: 'midtown@fitflow.com',
    hours: '5:30 AM - 10:00 PM',
    amenities: ['Gym Floor', 'Yoga Studio', 'Spin Studio', 'Sauna', 'Locker Rooms'],
  },
]

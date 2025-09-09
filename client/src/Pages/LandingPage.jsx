import { Compass, Menu, Phone, Goal, Bell, BarChart, Cloud, Sparkles, User, Plus, CatIcon, Mail, Contact, Book, Camera, X, Link } from "lucide-react"
import Card from "../Components/Landing/Card"
import PricingCard from "../Components/Landing/PricingCard"
import ContactUsForm from "../forms/ContactUsForm";


const LandingPage = () => {
    
const features = [
  {
    title: "Track Your Progress",
    icon: <Goal />,
    desc: "Stay motivated by monitoring daily and weekly streaks. Visualize how consistent you’ve been with your habits.",
  },
  {
    title: "Custom Reminders",
    icon: <Bell />,
    desc: "Never miss a habit. Set flexible reminders that keep you accountable without being intrusive.",
  },
  {
    title: "Simple & Clean Design",
    icon: <Sparkles />,
    desc: "Focus only on what matters. A distraction-free interface that makes habit tracking effortless.",
  },
  {
    title: "Detailed Analytics",
    icon: <BarChart />,
    desc: "Dive deeper into your progress with insights, completion rates, and trend analysis over time.",
  },
  {
    title: "Cross-Device Sync",
    icon: <Cloud />,
    desc: "Track habits seamlessly across mobile and desktop. Your progress is always up to date.",
  },
];

const pricingPlans = [
  {
    title: "Basic Plan",
    icon: <User />,
    desc: [
      "Access to core features",
      "Track up to 5 habits",
      "Basic analytics"
    ]
  },
  {
    title: "Pro Plan",
    icon: <BarChart />,
    desc: [
      "Unlimited habit tracking",
      "Advanced analytics & trends",
      "Custom reminders & notifications",
      "Priority support"
    ]
  },
  {
    title: "Enterprise Plan",
    icon: <Cloud />,
    desc: [
      "Team habit management",
      "Cross-device sync for multiple users",
      "Detailed reporting & insights",
      "Dedicated account manager"
    ]
  }
];

  return (
    <div className="Landing bg-gradient-to-br from-base-100 from-30% via-base-300  to-base-200 to-60% w-full h-full animate-gradient overflow-x-hidden">
    <header className='flex items-center justify-between p-4 gap-5'>
        <div className="Main text-3xl sm:text-5xl flex items-center gap-1.5 whitespace-nowrap ">
            <Compass size={30} className='font-bold rotate-12' />
            <h1>Habits Tracker </h1>
        </div>
        <div className="Others text-lg">
            <nav>
                <ul className='sm:flex gap-3 font-semibold items-center hidden'>
                    <li>Hero</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="button sm:hidden block">
                <Menu/>
            </div>
        </div>
    </header>
        <main className=''>
            <section className="hero w-full h-[36rem] overflow-hidden grid grid-cols-2 justify-center p-8">
                <div className="Title flex flex-col gap-2 sm:col-span-1 col-span-2 text-lg bg-base-300 p-8 rounded-lg animate-gradient shadow-sm">
                    <div className="Main text-4xl ">
                    <Compass size={40} className="font-bold"/>
                    <span className="font-bold ">Habit Tracker </span>
                    </div>
                    <span>Your All in One Companion For Tracking Your Habits and Finding Improvement along the way.It has Remainders, To-Do and Clendar Support and many other tools to help skyrocket your Productivity.</span>
                    <div className="Action flex gap-4 my-4">
                        <button className="flex items-center gap-1 rounded-md p-2 bg-base-300 whitespace-nowrap cursor-pointer shadow-sm">
                            <User />
                            <span>Sign Up</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-md p-2 border-secondary border-2 whitespace-nowrap cursor-pointer shadow-sm">
                            <Phone />
                            <span>Contact</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="features p-4">
                <h1 className="text-center text-3xl font-bold ">Features ✨</h1>
                <div className="Cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
                    {features.map((feature) => (
                        <Card 
                        icon={feature.icon}
                        title={feature.title}
                        desc={feature.desc} />
                    ))}
                </div>
            </section>
            <section className="pricing p-2 ">
                <span className="font-bold text-2xl flex justify-center">Pricing 💲</span>
                <div className="Cards grid grid-cols-1 sm:grid-cols-3 gap-2">
                {pricingPlans.map((plan) => (
                    <PricingCard 
                      icon={plan.icon}
                      title={plan.title}
                      desc={plan.desc}
                    />
                ))}
                </div>
            </section>
            <section className="ContactUs grid grid-cols-4 grid-rows-6 gap-1.5 p-2">
                <div className="Title col-span-4 text-4xl">
                    <h1 className="text-center font-semibold">Contact Us 📞</h1>
                </div>
                <div className="Form sm:col-span-2 col-span-4 row-span-8">
                    <ContactUsForm />
                </div>
                <div className="Cards sm:col-span-3 md:col-span-2 col-span-4">
                      <Card title={"Gmail"} icon={<Mail />} desc={"ishannepal04@gmail.com"}/>
                </div>
                <div className="Cards ssm:col-span-2 md:col-span-1 col-span-4">
                      <Card title={"Facebook"} icon={<Book />} desc={"Ishan Nepal"}/>
                </div>
                <div className="Cards ssm:col-span-2 md:col-span-1 col-span-4">
                      <Card title={"Instagram"} icon={<Camera />} desc={"IshanNepal001"}/>
                </div>
                <div className="Cards ssm:col-span-2 md:col-span-1 col-span-4">
                      <Card title={"X/Twitter"} icon={<X />} desc={"Ishannepal"}/>
                </div>
                <div className="Cards ssm:col-span-2 md:col-span-1 col-span-4">
                      <Card title={"linkedin"} icon={<Link />} desc={"IshanNepal"}/>
                </div>
            </section>
        </main>
    </div>
  )
}

export default LandingPage
"use client"

import { HelpCircle, Plus } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const faqs = [
    {
      question: "How does GrowVault help me grow my savings?",
      answer:
        "GrowVault offers high-yield savings plans that allow your money to grow through strategic investment models, ensuring maximum returns within a year.",
    },
    {
      question: "Can I withdraw my savings anytime?",
      answer:
        "Yes! We offer flexible withdrawal options depending on your chosen plan. Some plans have fixed maturity periods, while others allow partial withdrawals without penalties.",
    },
    {
      question: "Is my money safe with GrowVault?",
      answer:
        "Absolutely. We use top-tier encryption and security measures to protect your funds, ensuring every transaction is secure and reliable.",
    },
    {
      question: "What makes GrowVault different from a regular savings account?",
      answer:
        "Unlike traditional savings accounts, GrowVault offers higher returns, flexible plans, and strategic investment opportunities to help you grow your wealth faster.",
    },
    {
      question: "Who can use GrowVault?",
      answer:
        "GrowVault is designed for individuals, startups, and small businesses looking to maximize their savings and investments effortlessly.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up, choose a savings plan that fits your goals, and start growing your wealth today!",
    },
  ];
  

export function FaqsSection() {
  return (
    <div className="relative overflow-hidden bg-[#efefef] py-24">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-[#F4B659]">
            <HelpCircle className="h-4 w-4 text-[#F4B659]" />
            FAQ'S
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Got a quick question?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're here to help you make the right decision. Explore our frequently asked questions and find answers
            below.
          </p>
        </div>

        {/* Large curved rectangle container */}
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-white/50 p-8 shadow-lg backdrop-blur-sm border border-white/20">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} value={`item-${index}`}>
                <Accordion.Header>
                  <Accordion.Trigger className="group w-full">
                    <div className="flex w-full items-center justify-between rounded-2xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md border border-black/5">
                      <span className="text-left text-lg font-medium">{faq.question}</span>
                      <motion.div
                        initial={false}
                        animate={{ rotate: 0 }}
                        className="ml-4 rounded-full bg-black/5 p-2 transition-colors duration-200 group-data-[state=open]:bg-black/10"
                      >
                        <Plus className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                      </motion.div>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-black/5 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 bg-black/5 opacity-50 blur-3xl" />
      </div>
    </div>
  )
}

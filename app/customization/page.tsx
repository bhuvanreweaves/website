"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Ruler, Palette, MessageSquare, CheckCircle, X, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SITE } from "@/lib/site-info";

const steps = [
  { id: 1, label: "Inspiration", icon: Upload },
  { id: 2, label: "Measurements", icon: Ruler },
  { id: 3, label: "Fabric", icon: Palette },
  { id: 4, label: "Notes", icon: MessageSquare },
  { id: 5, label: "Submit", icon: CheckCircle },
];

const fabricOptions = [
  {
    id: "handloom-cotton",
    name: "Handloom Cotton",
    description: "Breathable, everyday comfort. Woven on traditional looms.",
    price: "+0",
  },
  {
    id: "linen",
    name: "Belgian Linen",
    description: "Premium drape, ideal for shirts and casual kurtas.",
    price: "+₹300",
  },
  {
    id: "khadi",
    name: "Handspun Khadi",
    description: "The purest Indian textile. Rustic texture, gentle on skin.",
    price: "+₹200",
  },
  {
    id: "chanderi",
    name: "Chanderi Silk Cotton",
    description: "Featherlight with a natural sheen. For formal occasions.",
    price: "+₹800",
  },
  {
    id: "modal",
    name: "Micro-Modal",
    description: "Exceptionally soft with a subtle sheen and perfect drape.",
    price: "+₹400",
  },
  {
    id: "silk-cotton",
    name: "Silk Cotton",
    description: "The warmth of cotton with the lustre of silk.",
    price: "+₹600",
  },
];

const measurementFields = [
  { name: "chest", label: "Chest", unit: "inches" },
  { name: "shoulder", label: "Shoulder", unit: "inches" },
  { name: "waist", label: "Waist", unit: "inches" },
  { name: "sleeveLenth", label: "Sleeve Length", unit: "inches" },
  { name: "armhole", label: "Armhole", unit: "inches" },
  { name: "shirtLength", label: "Shirt Length", unit: "inches" },
  { name: "kurtaLength", label: "Kurta Length", unit: "inches (optional)" },
];

export default function CustomizationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [measurements, setMeasurements] = useState<Record<string, string>>({});
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md px-6"
        >
          <div className="w-16 h-16 border-2 border-brown flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={28} className="text-brown" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl text-brown mb-4">
            Request Received
          </h2>
          <p className="text-sm text-brown/60 leading-relaxed mb-8">
            Thank you for your customization request. Our team will review your
            details and get back to you within 24-48 hours on WhatsApp or email
            to confirm fabric availability, pricing, and timelines.
          </p>
          <div className="bg-beige/50 p-4 mb-8">
            <p className="text-xs tracking-widest uppercase text-brown/40 mb-2">Estimated Turnaround</p>
            <p className="font-serif text-xl text-brown">5–7 Working Days</p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setCurrentStep(1); }}
            className="text-xs tracking-widest uppercase text-brown/50 hover:text-brown transition-colors underline"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-12 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Made from Your Saree</p>
          <h1 className="font-serif text-4xl md:text-5xl text-brown mb-2">
            Customize Your Garment
          </h1>
          <p className="text-sm text-brown/50 max-w-xl">
            Share your vision and measurements. We'll craft something truly yours.
          </p>
        </motion.div>
      </div>

      {/* Step Progress */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex items-center gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-8 h-8 border flex items-center justify-center transition-all ${
                    currentStep > step.id
                      ? "bg-brown border-brown text-cream"
                      : currentStep === step.id
                      ? "border-brown text-brown"
                      : "border-beige text-brown/30"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle size={14} strokeWidth={1.5} />
                  ) : (
                    <step.icon size={14} strokeWidth={1.5} />
                  )}
                </div>
                <span
                  className={`text-[9px] tracking-widest uppercase hidden sm:block ${
                    currentStep === step.id ? "text-brown" : "text-brown/30"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-px transition-colors ${
                    currentStep > step.id ? "bg-brown" : "bg-beige"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pb-20">
        <AnimatePresence mode="wait">
          {/* Step 1: Upload */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-serif text-2xl text-brown mb-2">Upload Your Inspiration</h2>
              <p className="text-sm text-brown/50 mb-8 max-w-xl">
                Share a photo, screenshot, or sketch of a garment style you love. This helps our artisans understand your vision.
              </p>

              <div
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed transition-colors cursor-pointer flex flex-col items-center justify-center p-16 max-w-md ${
                  uploadedImage ? "border-brown/40" : "border-beige hover:border-warm-beige"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {uploadedImage ? (
                  <div className="relative w-full aspect-square max-w-xs">
                    <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                    <button
                      onClick={(e) => { e.stopPropagation(); setUploadedImage(null); }}
                      className="absolute top-2 right-2 bg-brown text-cream w-6 h-6 flex items-center justify-center"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload size={24} className="text-brown/30 mb-4" strokeWidth={1.5} />
                    <p className="text-sm text-brown/50 text-center">
                      Click to upload or drag & drop
                    </p>
                    <p className="text-xs text-brown/30 mt-1">PNG, JPG up to 10MB</p>
                  </>
                )}
              </div>

              <p className="mt-4 text-xs text-brown/40">
                Don't have a reference image? No worries — you can skip this step and describe your vision in the notes.
              </p>
            </motion.div>
          )}

          {/* Step 2: Measurements */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-serif text-2xl text-brown mb-2">Your Measurements</h2>
              <p className="text-sm text-brown/50 mb-8 max-w-xl">
                Provide accurate measurements for the perfect fit. All measurements should be in inches.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-xl">
                {measurementFields.map((field) => (
                  <div key={field.name}>
                    <Label htmlFor={field.name} className="mb-2 block">
                      {field.label}
                    </Label>
                    <div className="flex items-end gap-2">
                      <Input
                        id={field.name}
                        type="number"
                        placeholder="0.0"
                        step="0.5"
                        min="0"
                        value={measurements[field.name] || ""}
                        onChange={(e) =>
                          setMeasurements((m) => ({ ...m, [field.name]: e.target.value }))
                        }
                        className="flex-1"
                      />
                      <span className="text-xs text-brown/40 pb-3">{field.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-beige/40 max-w-xl">
                <p className="text-xs text-brown/50">
                  <strong className="text-brown">Need help measuring?</strong> Our team can guide you via WhatsApp. Contact us at{" "}
                  <a href={`https://wa.me/${SITE.whatsappNumber}`} className="underline hover:text-brown">
                    {SITE.phoneDisplay}
                  </a>
                </p>
              </div>
            </motion.div>
          )}

          {/* Step 3: Fabric */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-serif text-2xl text-brown mb-2">Choose Your Fabric</h2>
              <p className="text-sm text-brown/50 mb-8 max-w-xl">
                Select the fabric that suits your style and occasion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
                {fabricOptions.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedFabric(fabric.id)}
                    className={`text-left p-5 border transition-all ${
                      selectedFabric === fabric.id
                        ? "border-brown bg-beige/30"
                        : "border-beige hover:border-warm-beige"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-medium text-brown">{fabric.name}</h3>
                      <span className="text-xs text-brown/40">{fabric.price}</span>
                    </div>
                    <p className="text-xs text-brown/50 leading-relaxed">{fabric.description}</p>
                    {selectedFabric === fabric.id && (
                      <div className="mt-3 flex items-center gap-1">
                        <CheckCircle size={12} className="text-brown" strokeWidth={2} />
                        <span className="text-xs text-brown">Selected</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Notes */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-serif text-2xl text-brown mb-2">Additional Notes</h2>
              <p className="text-sm text-brown/50 mb-8 max-w-xl">
                Any specific requirements, styling preferences, or occasion details you'd like us to know.
              </p>

              <div className="max-w-xl">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. — I want a mandarin collar, button-down style. This is for a wedding in December. I prefer earthy tones — mustard or terracotta."
                  rows={6}
                  className="w-full border-0 border-b border-warm-beige bg-transparent py-3 text-brown placeholder:text-brown/30 focus:outline-none focus:border-brown transition-colors text-sm resize-none"
                />
                <p className="text-xs text-brown/30 mt-2">{notes.length}/500 characters</p>
              </div>

              {/* Contact fields */}
              <div className="mt-10 max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="cname" className="mb-2 block">Your Name</Label>
                  <Input id="cname" placeholder="Full name" />
                </div>
                <div>
                  <Label htmlFor="cphone" className="mb-2 block">Phone / WhatsApp</Label>
                  <Input id="cphone" placeholder="+91 XXXXX XXXXX" type="tel" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="cemail" className="mb-2 block">Email Address</Label>
                  <Input id="cemail" placeholder="your@email.com" type="email" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 5: Review */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-serif text-2xl text-brown mb-2">Review & Submit</h2>
              <p className="text-sm text-brown/50 mb-8 max-w-xl">
                Review your customization request before submitting.
              </p>

              <div className="max-w-xl space-y-6">
                <div className="border border-beige p-5">
                  <p className="text-xs tracking-widest uppercase text-brown/40 mb-3">Reference Image</p>
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="Reference" className="w-20 h-20 object-cover" />
                  ) : (
                    <p className="text-sm text-brown/40">No image uploaded</p>
                  )}
                </div>

                <div className="border border-beige p-5">
                  <p className="text-xs tracking-widest uppercase text-brown/40 mb-3">Measurements</p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                    {measurementFields.map((f) => (
                      <div key={f.name} className="flex justify-between">
                        <span className="text-xs text-brown/50">{f.label}</span>
                        <span className="text-xs text-brown font-medium">
                          {measurements[f.name] ? `${measurements[f.name]}"` : "—"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-beige p-5">
                  <p className="text-xs tracking-widest uppercase text-brown/40 mb-3">Fabric</p>
                  <p className="text-sm text-brown">
                    {selectedFabric
                      ? fabricOptions.find((f) => f.id === selectedFabric)?.name
                      : "Not selected"}
                  </p>
                </div>

                {notes && (
                  <div className="border border-beige p-5">
                    <p className="text-xs tracking-widest uppercase text-brown/40 mb-3">Notes</p>
                    <p className="text-sm text-brown/70 leading-relaxed">{notes}</p>
                  </div>
                )}

                <div className="border border-beige p-5 bg-beige/20">
                  <p className="text-xs tracking-widest uppercase text-brown/40 mb-2">Estimated Timeline</p>
                  <p className="font-serif text-xl text-brown">5–7 Working Days</p>
                  <p className="text-xs text-brown/40 mt-1">
                    Our team will confirm exact timeline after reviewing your request
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 max-w-xl">
          {currentStep > 1 ? (
            <button
              onClick={() => setCurrentStep((s) => s - 1)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-brown/50 hover:text-brown transition-colors"
            >
              <ArrowLeft size={12} strokeWidth={1.5} />
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <Button onClick={() => setCurrentStep((s) => s + 1)} size="default">
              Continue
              <ArrowRight size={12} className="ml-2" strokeWidth={1.5} />
            </Button>
          ) : (
            <Button onClick={handleSubmit} size="default">
              Submit Request
              <CheckCircle size={12} className="ml-2" strokeWidth={1.5} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

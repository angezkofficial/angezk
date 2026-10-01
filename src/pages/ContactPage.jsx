import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send, Check, MessageSquare, Shield, HelpCircle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export default function ContactPage({ onNavigateToFaq }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Editorial Submission',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    'Editorial Submission',
    'Studio Collaboration',
    'Press & Media',
    'Open Source & Tooling',
    'General Inquiry'
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      inquiryType: 'Editorial Submission',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Editorial Header */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-zinc-300 text-[11px] font-mono uppercase tracking-widest text-zinc-900 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
              Direct Inquiries
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-zinc-950">
              Contact Angezk Collective
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Have an editorial proposal, game demo, manga storyboard, or technical partnership in mind? Our curators read every message.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-12 border border-zinc-200 rounded-md bg-zinc-50/50 text-center space-y-4">
                <div className="w-12 h-12 bg-zinc-950 text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-zinc-950">
                  Message Dispatched
                </h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-zinc-900">{formData.name}</strong>. Your message regarding <em>"{formData.subject || formData.inquiryType}"</em> has been routed to our editorial desk.
                </p>
                <div className="pt-4">
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type Radio / Pill Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2">
                    Inquiry Classification *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`px-3 py-1.5 text-xs font-medium rounded-sm border transition-colors cursor-pointer ${
                          formData.inquiryType === type
                            ? 'bg-zinc-950 text-white border-zinc-950 font-bold'
                            : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-500'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Chen"
                      className="w-full text-sm px-3.5 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden bg-white text-zinc-950"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="maya@example.com"
                      className="w-full text-sm px-3.5 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden bg-white text-zinc-950"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Short summary of your message or project..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden bg-white text-zinc-950"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide relevant links, production timelines, or questions..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden bg-white text-zinc-950 resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    icon={Send}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                  >
                    Transmit Message
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Response Time Guarantee Card */}
            <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-md space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-zinc-950" />
                <span>Editorial Dispatch Time</span>
              </div>
              <h3 className="text-xl font-bold font-display text-zinc-950">
                Average response time: within 24 hours.
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Submissions and collaborative pitches are reviewed by active creators from our editorial team in Tokyo, London, and San Francisco.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="p-6 bg-white border border-zinc-200 rounded-md space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Direct Channels
              </h4>
              
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                  <span className="text-zinc-500">Editorial Desk</span>
                  <span className="font-mono font-medium text-zinc-950">curation@angezk.com</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                  <span className="text-zinc-500">Technical & Tooling</span>
                  <span className="font-mono font-medium text-zinc-950">tech@angezk.com</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                  <span className="text-zinc-500">Partnerships</span>
                  <span className="font-mono font-medium text-zinc-950">studios@angezk.com</span>
                </div>
              </div>
            </div>

            {/* Quick FAQ Link */}
            <div className="p-6 bg-zinc-950 text-white rounded-md border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest">
                <HelpCircle className="w-4 h-4" />
                <span>Common Questions</span>
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                Looking for submission criteria or image requirements?
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Check our Frequently Asked Questions section for answers on licensing, formats, and editorial standards.
              </p>
              <div className="pt-1">
                <button
                  onClick={onNavigateToFaq}
                  className="text-xs font-bold text-white hover:underline uppercase font-mono tracking-wider cursor-pointer"
                >
                  View FAQ Guide →
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

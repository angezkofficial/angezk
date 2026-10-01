import React, { useState } from 'react';
import { Check, UploadCloud, ArrowRight } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { CATEGORIES } from '../../data/categories';

export default function SubmitProjectModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    creator: '',
    category: 'anime-manga',
    link: '',
    tools: '',
    summary: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state for viewing, reset on close
    }, 500);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      title: '',
      creator: '',
      category: 'anime-manga',
      link: '',
      tools: '',
      summary: '',
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleResetAndClose}
      title="Submit to Angezk"
      subtitle="Share your manga, game project, animation reel, digital art, or developer tool."
      maxWidth="max-w-xl"
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center mx-auto">
            <Check className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl font-bold font-display text-zinc-950">
            Project Received for Curation
          </h4>
          <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
            Thank you for sharing <strong className="text-zinc-900">{formData.title || 'your project'}</strong> with Angezk. Our editorial collective reviews new submissions every Friday.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="md" onClick={handleResetAndClose}>
              Done & Return
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
                Project Title *
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Kage: Neon Ronin"
                className="w-full text-sm px-3 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
                Creator / Collective *
              </label>
              <input
                type="text"
                name="creator"
                required
                value={formData.creator}
                onChange={handleChange}
                placeholder="e.g. Studio Kanso"
                className="w-full text-sm px-3 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
              Primary Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full text-sm px-3 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden bg-white"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
              Project URL / Repository / Demo Link
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full text-sm px-3 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
              Tools & Software Used
            </label>
            <input
              type="text"
              name="tools"
              value={formData.tools}
              onChange={handleChange}
              placeholder="e.g. Clip Studio Paint, Blender, Godot 4, Rust"
              className="w-full text-sm px-3 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-1.5">
              Summary & Context *
            </label>
            <textarea
              name="summary"
              required
              rows={3}
              value={formData.summary}
              onChange={handleChange}
              placeholder="Describe the concept, technique, challenges, or creative intent..."
              className="w-full text-sm px-3 py-2.5 rounded-sm border border-zinc-300 focus:border-zinc-950 focus:outline-hidden resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3 border-t border-zinc-200">
            <Button variant="ghost" size="sm" onClick={handleResetAndClose}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit" icon={UploadCloud}>
              Submit for Curation
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}

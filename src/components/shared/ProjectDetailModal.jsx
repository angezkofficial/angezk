import React, { useState } from 'react';
import { Heart, Share2, ExternalLink, Calendar, Eye, Wrench, User, Check, Layers } from 'lucide-react';
import Modal from '../ui/Modal';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={`${project.categoryLabel} • Curated Project Showcase`}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Top Badges & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <Badge variant="inverse">{project.categoryLabel}</Badge>
            <Badge variant="outline">{project.status}</Badge>
            <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-zinc-400" />
              {project.metrics?.views || '12k'} views
            </span>
            <span className="flex items-center gap-1">
              <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-zinc-950 text-zinc-950' : 'text-zinc-400'}`} />
              {project.metrics?.appreciations || '1.4k'}
            </span>
          </div>
        </div>

        {/* Author Card */}
        <div className="flex items-center justify-between p-4 bg-zinc-50 border border-zinc-200 rounded-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-950 text-white flex items-center justify-center font-display font-bold text-sm">
              {project.author?.name ? project.author.name.charAt(0) : 'A'}
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-950">
                {project.author?.name || 'Angezk Creator'}
              </h4>
              <p className="text-xs text-zinc-500 font-mono">
                {project.author?.handle} • {project.author?.role}
              </p>
            </div>
          </div>

          <Badge variant="default" size="sm">
            Verified Creator
          </Badge>
        </div>

        {/* Narrative & Description */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Overview & Context
          </h4>
          <p className="text-sm leading-relaxed text-zinc-800">
            {project.fullDescription || project.summary}
          </p>
        </div>

        {/* Tools and Pipeline Used */}
        {project.toolsUsed && project.toolsUsed.length > 0 && (
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              Tools & Pipeline
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs bg-zinc-100 border border-zinc-200 rounded-sm text-zinc-800 font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Taxonomy & Keywords
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-zinc-600 bg-white border border-zinc-200 px-2 py-0.5 rounded-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions Footer */}
        <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant={liked ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setLiked(!liked)}
              icon={Heart}
              className="grow sm:grow-0"
            >
              {liked ? 'Appreciated' : 'Appreciate'}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleShare}
              icon={copied ? Check : Share2}
              className="grow sm:grow-0"
            >
              {copied ? 'Link Copied' : 'Share'}
            </Button>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Close Viewer
          </Button>
        </div>
      </div>
    </Modal>
  );
}

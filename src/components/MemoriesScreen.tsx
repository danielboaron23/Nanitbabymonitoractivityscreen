import { useState, useEffect, useRef } from 'react';
import { Search, Filter, Play, Camera, Video, Star, Share2, Plus, Wand2, Calendar, Clock, ChevronLeft, ChevronRight, Heart, Sparkles, Volume2, Palette, Scissors, FileText, Loader2, CheckCircle, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Frame1410088493 from '../imports/Frame1410088493';
import { motion } from 'motion/react';
import NanitStatusBar from './NanitStatusBar';
import CompactVideoPlayer from './CompactVideoPlayer';

interface Memory {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'photo' | 'video' | 'manual';
  thumbnail: string;
  isEnhanced?: boolean;
  isRecent?: boolean;
  aiSummary?: string;
  babyAge?: string;
  isFavorite?: boolean;
  isMilestone?: boolean;
}

interface MonthlyRecap {
  id: string;
  title: string;
  month: string;
  thumbnail: string;
  duration: string;
  highlightCount: number;
}

interface MemoriesScreenProps {
  onGoToLive: () => void;
  onBack: () => void;
  activeTab: string;
}

type FilterTab = 'all' | 'favorites' | 'milestones';

export default function MemoriesScreen({ onGoToLive, onBack, activeTab }: MemoriesScreenProps) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [showAddMemoryModal, setShowAddMemoryModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showEnhanceModal, setShowEnhanceModal] = useState(false);
  const [selectedMemoryForEnhancement, setSelectedMemoryForEnhancement] = useState<Memory | null>(null);
  const [enhancementStep, setEnhancementStep] = useState<'options' | 'processing' | 'preview'>('options');
  const [selectedEnhancements, setSelectedEnhancements] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recapScrollRef = useRef<HTMLDivElement>(null);

  // Mock monthly recaps data
  const monthlyRecaps: MonthlyRecap[] = [
    {
      id: '1',
      title: 'December Recap',
      month: 'December 2024',
      thumbnail: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=300&h=200&fit=crop&q=80',
      duration: '3:45',
      highlightCount: 12
    },
    {
      id: '2',
      title: 'November Recap',
      month: 'November 2024',
      thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop&q=80',
      duration: '4:12',
      highlightCount: 15
    },
    {
      id: '3',
      title: 'October Recap',
      month: 'October 2024',
      thumbnail: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=200&fit=crop&q=80',
      duration: '3:28',
      highlightCount: 9
    },
    {
      id: '4',
      title: 'September Recap',
      month: 'September 2024',
      thumbnail: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=300&h=200&fit=crop&q=80',
      duration: '5:01',
      highlightCount: 18
    }
  ];

  // Mock memories data with favorites and milestones
  const memories: Memory[] = [
    {
      id: '1',
      title: 'First Steps Discovery',
      date: 'Today',
      time: '2:34 PM',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&h=300&fit=crop&q=80',
      isEnhanced: true,
      isRecent: true,
      babyAge: '11 months, 2 days',
      isFavorite: true,
      isMilestone: true,
      aiSummary: "AI-generated story: Baby's incredible first attempt at standing! Watch as determination turns into triumph in this precious milestone moment."
    },
    {
      id: '2', 
      title: 'Morning Giggles',
      date: 'Yesterday',
      time: '9:15 AM',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&q=80',
      isEnhanced: true,
      babyAge: '11 months, 1 day',
      isFavorite: false,
      isMilestone: false,
      aiSummary: "AI-generated story: Pure joy captured! Baby's infectious laughter fills the room during morning playtime, creating the perfect start to the day."
    },
    {
      id: '3',
      title: 'Peaceful Sleep',
      date: 'Nov 28',
      time: '11:45 PM',
      type: 'photo',
      thumbnail: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop&q=80',
      isEnhanced: true,
      babyAge: '11 months',
      isFavorite: true,
      isMilestone: false,
      aiSummary: "AI-generated story: Serene slumber captured in perfect stillness. Baby sleeps peacefully, dreaming sweet dreams in the gentle moonlight."
    },
    {
      id: '4',
      title: 'First Solid Food',
      date: 'Nov 27',
      time: '3:22 PM',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80',
      isEnhanced: false,
      babyAge: '10 months, 29 days',
      isFavorite: false,
      isMilestone: true
    },
    {
      id: '5',
      title: 'Feeding Time Fun',
      date: 'Nov 26',
      time: '6:30 PM',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=300&fit=crop&q=80',
      isEnhanced: true,
      babyAge: '10 months, 28 days',
      isFavorite: true,
      isMilestone: false,
      aiSummary: "AI-generated story: Mealtime magic! Baby explores new tastes and textures, creating adorable messes and precious memories along the way."
    },
    {
      id: '6',
      title: 'Playtime Discovery',
      date: 'Nov 25',
      time: '4:15 PM',
      type: 'photo',
      thumbnail: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop&q=80',
      isEnhanced: true,
      babyAge: '10 months, 27 days',
      isFavorite: false,
      isMilestone: false,
      aiSummary: "AI-generated story: Curiosity in action! Baby explores the world through touch and wonder, discovering the joy in simple moments."
    }
  ];

  const getMemoryIcon = (type: Memory['type']) => {
    switch (type) {
      case 'photo':
        return <Camera className="w-3 h-3 text-white" />;
      case 'video':
        return <Video className="w-3 h-3 text-white" />;
      case 'manual':
        return <Star className="w-3 h-3 text-[#EF7B7B]" />;
      default:
        return null;
    }
  };

  const handleToggleFavorite = (memoryId: string) => {
    console.log(`Toggle favorite for memory ${memoryId}`);
  };

  const handleEnhanceMemory = (memoryId: string) => {
    const memory = memories.find(m => m.id === memoryId);
    if (memory) {
      setSelectedMemoryForEnhancement(memory);
      setShowEnhanceModal(true);
      setEnhancementStep('options');
      setSelectedEnhancements([]);
    }
  };

  const handleEnhancementToggle = (enhancement: string) => {
    setSelectedEnhancements(prev => 
      prev.includes(enhancement) 
        ? prev.filter(e => e !== enhancement)
        : [...prev, enhancement]
    );
  };

  const handleStartEnhancement = () => {
    if (selectedEnhancements.length === 0) return;
    
    setEnhancementStep('processing');
    
    // Simulate processing time
    setTimeout(() => {
      setEnhancementStep('preview');
    }, 3000);
  };

  const handleSaveEnhancement = () => {
    setShowEnhanceModal(false);
    setSelectedMemoryForEnhancement(null);
    setEnhancementStep('options');
    setSelectedEnhancements([]);
    // Here you would typically save the enhanced memory
  };

  const handleCloseEnhanceModal = () => {
    setShowEnhanceModal(false);
    setSelectedMemoryForEnhancement(null);
    setEnhancementStep('options');
    setSelectedEnhancements([]);
  };

  const handleShareMemory = (memoryId: string) => {
    console.log(`Share memory ${memoryId}`);
  };

  const handleAddMemory = () => {
    setShowAddMemoryModal(true);
  };

  const handlePlayRecap = (recapId: string) => {
    console.log(`Play recap ${recapId}`);
  };

  const handleSearchClick = () => {
    setShowSearchModal(true);
  };

  const handlePlayVideo = (memory: Memory) => {
    if (memory.type === 'video') {
      setPlayingVideo(memory.id);
    }
  };

  const handleCloseVideoPlayer = (memoryId: string) => {
    setPlayingVideo(null);
  };

  // Filter memories based on active filter and search query
  const filteredMemories = memories.filter(memory => {
    // First apply filter chips
    let matchesFilter = true;
    switch (activeFilter) {
      case 'favorites':
        matchesFilter = memory.isFavorite;
        break;
      case 'milestones':
        matchesFilter = memory.isMilestone;
        break;
      default:
        matchesFilter = true;
    }

    // Then apply search query
    let matchesSearch = true;
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      matchesSearch = 
        memory.title.toLowerCase().includes(query) ||
        memory.date.toLowerCase().includes(query) ||
        (memory.babyAge && memory.babyAge.toLowerCase().includes(query)) ||
        (memory.aiSummary && memory.aiSummary.toLowerCase().includes(query));
    }

    return matchesFilter && matchesSearch;
  });

  const scrollRecaps = (direction: 'left' | 'right') => {
    if (recapScrollRef.current) {
      const scrollAmount = 200;
      recapScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-[393px] h-[852px] bg-gradient-to-b from-[#394562] to-[#031229] relative overflow-hidden rounded-[44px]">
      {/* Nanit Status Bar */}
      <NanitStatusBar title="Memory Studio" />

      {/* Navigation Header */}
      <div className="absolute top-[57.49px] left-0 right-0 h-[44px] bg-transparent flex items-center justify-between px-4 z-20">
        <button 
          className="w-6 h-6 flex flex-col justify-center items-center gap-1"
          onClick={onBack}
        >
          <div className="w-4 h-[2px] bg-white rounded"></div>
          <div className="w-4 h-[2px] bg-white rounded"></div>
          <div className="w-4 h-[2px] bg-white rounded"></div>
        </button>
        
        <h1 className="text-white text-[16px] font-medium">Memory Studio</h1>
        
        <button 
          className="w-6 h-6 flex items-center justify-center"
          onClick={handleSearchClick}
        >
          <Search className="w-5 h-5 text-[#EF7B7B]" />
        </button>
      </div>

      {/* Monthly Recaps Section - With increased bottom margin */}
      <div className="absolute top-[115px] left-0 right-0 z-10">
        <div className="px-4 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-medium text-[16px]">Monthly Recaps</h2>
            <div className="flex gap-1">
              <button
                onClick={() => scrollRecaps('left')}
                className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => scrollRecaps('right')}
                className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          
          <div 
            ref={recapScrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-none pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {monthlyRecaps.map((recap) => (
              <motion.div
                key={recap.id}
                className="flex-shrink-0 w-[160px] h-[135px] bg-[#25304A] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => handlePlayRecap(recap.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-[85px]">
                  <ImageWithFallback
                    src={recap.thumbnail}
                    alt={recap.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#EF7B7B]/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/60 rounded text-white text-[10px] font-medium">
                    {recap.duration}
                  </div>
                </div>
                
                <div className="p-3 h-[50px] flex flex-col justify-start">
                  <p className="text-white text-[12px] font-medium truncate leading-tight mb-0.5">{recap.title}</p>
                  <p className="text-[#EF7B7B] text-[10px] font-medium leading-tight mb-0.5">{recap.month}</p>
                  <p className="text-white/60 text-[9px] leading-tight">{recap.highlightCount} highlights</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Separator */}
        <div className="px-4 pb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="w-2 h-2 bg-[#EF7B7B]/60 rounded-full"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Filter Chips - With increased top and bottom margins */}
      <div className="absolute top-[285px] left-0 right-0 z-10">
        <div className="px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-white/80 text-[16px] font-medium text-[rgba(255,255,255,1)]">Browse by:</h3>

          </div>
          
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'favorites', label: 'Favorites ★' },
              { id: 'milestones', label: 'Milestones' }
            ].map((filter) => (
              <motion.button
                key={filter.id}
                className={`px-4 py-2.5 rounded-full text-[12px] font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-[#EF7B7B] text-white shadow-lg shadow-[#EF7B7B]/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/10'
                }`}
                onClick={() => setActiveFilter(filter.id as FilterTab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>

      </div>

      {/* Memories Feed - With increased top margin */}
      <div 
        ref={scrollRef}
        className="absolute top-[390px] left-0 right-0 bottom-[88px] overflow-y-auto px-4 pb-20"
      >
        {/* Section Title */}
        <div className="mb-6">

          <div className="flex items-center justify-between">
            <p className="text-white/60 text-[12px] px-1">
              {filteredMemories.length} {filteredMemories.length === 1 ? 'memory' : 'memories'} 
              {activeFilter === 'favorites' && ' in favorites'}
              {activeFilter === 'milestones' && ' milestones'}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
            {searchQuery && (
              <motion.button
                className="text-[#EF7B7B] text-[12px] px-2 py-1 bg-[#EF7B7B]/10 rounded-full hover:bg-[#EF7B7B]/20 transition-colors"
                onClick={() => setSearchQuery('')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear search
              </motion.button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {filteredMemories.map((memory, index) => (
            <motion.div 
              key={memory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-[#25304A] rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -2 }}
            >
              {/* Main Memory Content */}
              <div className="relative h-[180px]">
                {memory.type === 'video' && playingVideo === memory.id ? (
                  <CompactVideoPlayer
                    videoSrc={memory.thumbnail}
                    posterSrc={memory.thumbnail}
                    title={memory.title}
                    duration="2:34"
                    autoPlay={true}
                    onClose={() => handleCloseVideoPlayer(memory.id)}
                    showFullscreenButton={true}
                    className="rounded-none"
                  />
                ) : (
                  <>
                    <ImageWithFallback
                      src={memory.thumbnail}
                      alt={memory.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Memory type icon */}
                    <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center ${
                      memory.isEnhanced ? 'bg-[#EF7B7B]/80' : 'bg-black/60'
                    }`}>
                      {getMemoryIcon(memory.type)}
                    </div>
                    
                    {/* Enhanced badge */}
                    {memory.isEnhanced && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-[#EF7B7B]/80 rounded-full backdrop-blur-sm">
                        <span className="text-white text-[10px] font-medium">AI Enhanced</span>
                      </div>
                    )}
                    
                    {/* Milestone badge */}
                    {memory.isMilestone && (
                      <div className={`absolute ${memory.isEnhanced ? 'top-12' : 'top-3'} left-3 px-2 py-1 bg-gradient-to-r from-yellow-400/80 to-orange-500/80 rounded-full backdrop-blur-sm`}>
                        <span className="text-white text-[10px] font-medium">Milestone</span>
                      </div>
                    )}
                    
                    {/* Play button for videos */}
                    {memory.type === 'video' && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => handlePlayVideo(memory)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all">
                          <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Memory info overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-medium text-[14px] mb-1">{memory.title}</h3>
                      <div className="flex items-center gap-2 text-white/80 text-[11px]">
                        <Clock className="w-3 h-3" />
                        <span>{memory.date} • {memory.time}</span>
                        {memory.babyAge && (
                          <>
                            <span>•</span>
                            <span>{memory.babyAge}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Action Bar */}
              <div className="bg-[#25304A] p-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    {/* Favorite button */}
                    <motion.button
                      className={`p-2.5 rounded-full transition-all duration-200 ${
                        memory.isFavorite 
                          ? 'bg-[#EF7B7B]/20 text-[#EF7B7B]' 
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                      onClick={() => handleToggleFavorite(memory.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Star 
                        className="w-4 h-4" 
                        fill={memory.isFavorite ? 'currentColor' : 'none'}
                      />
                    </motion.button>
                    
                    {/* Enhance/Edit button */}
                    <motion.button
                      className="p-2.5 rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-all duration-200"
                      onClick={() => handleEnhanceMemory(memory.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Wand2 className="w-4 h-4" />
                    </motion.button>
                    
                    {/* Share button */}
                    <motion.button
                      className="p-2.5 rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-all duration-200"
                      onClick={() => handleShareMemory(memory.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  {/* Memory stats */}
                  <div className="flex items-center gap-2 text-white/60 text-[11px]">
                    {memory.isEnhanced && (
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Enhanced</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {filteredMemories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white/40" />
              </div>
              <h3 className="text-white font-medium text-[16px] mb-2">No memories found</h3>
              <p className="text-white/60 text-[14px] mb-1">in this category</p>
              <p className="text-white/40 text-[12px]">Try switching filters or add new memories!</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Primary FAB - Add Memory */}
      <motion.button
        className="absolute bottom-[108px] right-6 w-14 h-14 bg-gradient-to-br from-[#EF7B7B] to-[#FF9F9F] rounded-full shadow-2xl flex items-center justify-center z-30"
        onClick={handleAddMemory}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 8px 32px rgba(239, 123, 123, 0.3)",
            "0 8px 32px rgba(239, 123, 123, 0.5)",
            "0 8px 32px rgba(239, 123, 123, 0.3)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
        
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#EF7B7B]/50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>

      {/* Add Memory Modal */}
      {showAddMemoryModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          onClick={() => setShowAddMemoryModal(false)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 400,
              mass: 0.8
            }}
            className="absolute bottom-[120px] right-4 w-[280px] bg-[#25304A]/98 backdrop-blur-xl rounded-2xl border border-white/15 shadow-2xl shadow-black/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#EF7B7B]/20 rounded-full flex items-center justify-center">
                  <Plus className="w-4 h-4 text-[#EF7B7B]" />
                </div>
                <h3 className="text-white font-medium text-[16px]">Add Memory</h3>
              </div>
              <motion.button
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={() => setShowAddMemoryModal(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus className="w-4 h-4 text-white/70 rotate-45" />
              </motion.button>
            </div>
            
            {/* Options */}
            <div className="p-4">
              <div className="space-y-3">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full p-4 bg-gradient-to-r from-[#EF7B7B]/20 to-[#FF9F9F]/20 border border-[#EF7B7B]/30 rounded-xl text-left hover:from-[#EF7B7B]/30 hover:to-[#FF9F9F]/30 transition-all duration-200 group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EF7B7B]/25 rounded-full flex items-center justify-center group-hover:bg-[#EF7B7B]/35 transition-colors">
                      <Camera className="w-5 h-5 text-[#EF7B7B]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-[14px]">Take Photo</p>
                      <p className="text-white/60 text-[12px] mt-0.5">Capture a moment now</p>
                    </div>
                    <div className="w-2 h-2 bg-[#EF7B7B]/50 rounded-full group-hover:bg-[#EF7B7B]/70 transition-colors"></div>
                  </div>
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="w-full p-4 bg-gradient-to-r from-[#EF7B7B]/20 to-[#FF9F9F]/20 border border-[#EF7B7B]/30 rounded-xl text-left hover:from-[#EF7B7B]/30 hover:to-[#FF9F9F]/30 transition-all duration-200 group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EF7B7B]/25 rounded-full flex items-center justify-center group-hover:bg-[#EF7B7B]/35 transition-colors">
                      <Video className="w-5 h-5 text-[#EF7B7B]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-[14px]">Record Video</p>
                      <p className="text-white/60 text-[12px] mt-0.5">Start recording</p>
                    </div>
                    <div className="w-2 h-2 bg-[#EF7B7B]/50 rounded-full group-hover:bg-[#EF7B7B]/70 transition-colors"></div>
                  </div>
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-left hover:bg-white/15 transition-all duration-200 group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center group-hover:bg-white/25 transition-colors">
                      <Plus className="w-5 h-5 text-white/80" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-[14px]">Upload from Gallery</p>
                      <p className="text-white/60 text-[12px] mt-0.5">Choose existing photos/videos</p>
                    </div>
                    <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white/60 transition-colors"></div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Search Modal */}
      {showSearchModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-start justify-center z-[100] pt-16"
          onClick={() => setShowSearchModal(false)}
        >
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              mass: 0.8
            }}
            className="bg-[#25304A]/95 backdrop-blur-xl rounded-2xl w-[calc(100%-32px)] max-w-sm mx-4 border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#EF7B7B]/20 rounded-full flex items-center justify-center">
                  <Search className="w-4 h-4 text-[#EF7B7B]" />
                </div>
                <h3 className="text-white font-medium text-[16px]">Search Memories</h3>
              </div>
              <motion.button
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={() => setShowSearchModal(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus className="w-4 h-4 text-white/70 rotate-45" />
              </motion.button>
            </div>
            
            {/* Search Input */}
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title, date, or age..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 bg-white/10 border border-white/20 rounded-xl px-4 pr-10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EF7B7B]/50 focus:border-[#EF7B7B]/50 transition-all"
                  autoFocus
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search className="w-4 h-4 text-white/40" />
                </div>
              </div>
              
              {/* Quick Search Suggestions */}
              <div className="mt-4">
                <p className="text-white/60 text-[12px] mb-3">Quick searches:</p>
                <div className="flex flex-wrap gap-2">
                  {['Today', 'Yesterday', 'Milestones', 'Enhanced', '11 months'].map((suggestion) => (
                    <motion.button
                      key={suggestion}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white/70 text-[12px] rounded-full border border-white/10 transition-all"
                      onClick={() => setSearchQuery(suggestion)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Search Results Preview */}
              {searchQuery && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <p className="text-white/60 text-[12px] mb-3">
                    {filteredMemories.length} result{filteredMemories.length !== 1 ? 's' : ''} found
                  </p>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {filteredMemories.slice(0, 3).map((memory) => (
                      <div key={memory.id} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                        <div className="w-8 h-8 bg-[#EF7B7B]/20 rounded-lg flex items-center justify-center">
                          {getMemoryIcon(memory.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-[12px] font-medium truncate">{memory.title}</p>
                          <p className="text-white/50 text-[10px]">{memory.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {filteredMemories.length > 0 && (
                    <motion.button
                      className="w-full mt-3 py-2.5 bg-[#EF7B7B]/20 hover:bg-[#EF7B7B]/30 text-[#EF7B7B] text-[13px] font-medium rounded-xl transition-all"
                      onClick={() => setShowSearchModal(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View All Results
                    </motion.button>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Enhance Modal */}
      {showEnhanceModal && selectedMemoryForEnhancement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[100]"
          onClick={enhancementStep === 'processing' ? undefined : handleCloseEnhanceModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              mass: 0.8
            }}
            className="bg-[#25304A]/95 backdrop-blur-xl rounded-3xl w-[calc(100%-32px)] max-w-sm mx-4 border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {enhancementStep === 'options' && (
              <>
                {/* Header */}
                <div className="flex items-center justify-between p-6 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#EF7B7B]/30 to-[#FF9F9F]/30 rounded-full flex items-center justify-center">
                      <Wand2 className="w-5 h-5 text-[#EF7B7B]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-[18px]">AI Enhancement</h3>
                      <p className="text-white/60 text-[12px]">{selectedMemoryForEnhancement.title}</p>
                    </div>
                  </div>
                  <motion.button
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    onClick={handleCloseEnhanceModal}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Plus className="w-4 h-4 text-white/70 rotate-45" />
                  </motion.button>
                </div>
                
                {/* Enhancement Options */}
                <div className="px-6 pb-6">
                  <p className="text-white/70 text-[13px] mb-4">Select AI enhancements to apply:</p>
                  
                  <div className="space-y-3">
                    {[
                      { id: 'story', label: 'Story Generation', icon: FileText, description: 'AI-generated story about this moment' },
                      { id: 'captions', label: 'Smart Captions', icon: Sparkles, description: 'Intelligent auto-generated captions' },
                      { id: 'color', label: 'Color Enhancement', icon: Palette, description: 'Enhance colors and lighting' },
                      { id: 'crop', label: 'Smart Crop', icon: Scissors, description: 'Automatically crop for best composition' }
                    ].map((enhancement) => {
                      const isSelected = selectedEnhancements.includes(enhancement.id);
                      const Icon = enhancement.icon;
                      
                      return (
                        <motion.button
                          key={enhancement.id}
                          className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#EF7B7B]/20 border-[#EF7B7B]/50 shadow-lg shadow-[#EF7B7B]/20'
                              : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                          }`}
                          onClick={() => handleEnhancementToggle(enhancement.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              isSelected ? 'bg-[#EF7B7B]/30' : 'bg-white/10'
                            }`}>
                              <Icon className={`w-5 h-5 ${isSelected ? 'text-[#EF7B7B]' : 'text-white/70'}`} />
                            </div>
                            <div className="flex-1">
                              <p className={`font-medium text-[14px] ${isSelected ? 'text-white' : 'text-white/90'}`}>
                                {enhancement.label}
                              </p>
                              <p className="text-white/60 text-[11px] mt-0.5">{enhancement.description}</p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              isSelected 
                                ? 'border-[#EF7B7B] bg-[#EF7B7B]' 
                                : 'border-white/30'
                            }`}>
                              {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <motion.button
                      className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white/70 text-[14px] font-medium rounded-xl transition-all"
                      onClick={handleCloseEnhanceModal}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      className={`flex-1 py-3 text-[14px] font-medium rounded-xl transition-all ${
                        selectedEnhancements.length > 0
                          ? 'bg-gradient-to-r from-[#EF7B7B] to-[#FF9F9F] text-white shadow-lg shadow-[#EF7B7B]/30 hover:shadow-[#EF7B7B]/40'
                          : 'bg-white/10 text-white/50 cursor-not-allowed'
                      }`}
                      onClick={handleStartEnhancement}
                      disabled={selectedEnhancements.length === 0}
                      whileHover={selectedEnhancements.length > 0 ? { scale: 1.02 } : {}}
                      whileTap={selectedEnhancements.length > 0 ? { scale: 0.98 } : {}}
                    >
                      Enhance ({selectedEnhancements.length})
                    </motion.button>
                  </div>
                </div>
              </>
            )}

            {enhancementStep === 'processing' && (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#EF7B7B]/30 to-[#FF9F9F]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-8 h-8 text-[#EF7B7B]" />
                  </motion.div>
                </div>
                <h3 className="text-white font-semibold text-[18px] mb-2">AI Processing</h3>
                <p className="text-white/70 text-[14px] mb-4">Enhancing your memory...</p>
                <div className="space-y-2">
                  {selectedEnhancements.map((enhancement, index) => (
                    <motion.div
                      key={enhancement}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: index * 0.3
                      }}
                      className="text-[#EF7B7B] text-[12px] font-medium"
                    >
                      {enhancement === 'story' && '✨ Generating AI story...'}
                      {enhancement === 'captions' && '📝 Creating smart captions...'}
                      {enhancement === 'color' && '🎨 Enhancing colors...'}
                      {enhancement === 'crop' && '✂️ Smart cropping...'}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {enhancementStep === 'preview' && (
              <>
                {/* Header */}
                <div className="flex items-center justify-between p-6 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#EF7B7B]/30 to-[#FF9F9F]/30 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#EF7B7B]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-[18px]">Enhancement Complete</h3>
                      <p className="text-white/60 text-[12px]">Preview your enhanced memory</p>
                    </div>
                  </div>
                  <motion.button
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    onClick={handleCloseEnhanceModal}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Plus className="w-4 h-4 text-white/70 rotate-45" />
                  </motion.button>
                </div>
                
                {/* Preview Content */}
                <div className="px-6 pb-6">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-[#EF7B7B]/20 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-[#EF7B7B]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-[14px]">{selectedMemoryForEnhancement.title}</p>
                        <p className="text-[#EF7B7B] text-[11px]">Enhanced with AI</p>
                      </div>
                    </div>
                    
                    {selectedEnhancements.includes('story') && (
                      <div className="mb-4">
                        <p className="text-white/80 text-[12px] leading-relaxed">
                          ✨ AI Story: "A magical moment captured in time - Baby's journey of discovery continues with this precious memory, filled with wonder and joy that will be treasured forever."
                        </p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedEnhancements.map((enhancement) => (
                        <div key={enhancement} className="px-2 py-1 bg-[#EF7B7B]/20 rounded-full">
                          <span className="text-[#EF7B7B] text-[10px] font-medium">
                            {enhancement === 'story' && '📖 Story'}
                            {enhancement === 'captions' && '📝 Captions'}
                            {enhancement === 'color' && '🎨 Colors'}
                            {enhancement === 'crop' && '✂️ Crop'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <motion.button
                      className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white/70 text-[14px] font-medium rounded-xl transition-all"
                      onClick={handleCloseEnhanceModal}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Discard
                    </motion.button>
                    <motion.button
                      className="flex-1 py-3 bg-gradient-to-r from-[#EF7B7B] to-[#FF9F9F] text-white text-[14px] font-medium rounded-xl shadow-lg shadow-[#EF7B7B]/30 hover:shadow-[#EF7B7B]/40 transition-all"
                      onClick={handleSaveEnhancement}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Save Enhanced
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-[88px] z-10">
        <Frame1410088493 
          activeTab={activeTab} 
          onNavigateToHome={() => console.log('Navigate to Home')}
          onNavigateToActivity={onGoToLive}
          onNavigateToMemories={() => {}} 
        />
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[155px] h-[5px] bg-white/30 rounded-full z-20"></div>
    </div>
  );
}
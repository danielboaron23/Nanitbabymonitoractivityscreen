import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, SkipBack, SkipForward, X } from 'lucide-react';

interface CompactVideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  duration?: string;
  autoPlay?: boolean;
  onClose?: () => void;
  showFullscreenButton?: boolean;
  className?: string;
}

export default function CompactVideoPlayer({ 
  videoSrc, 
  posterSrc, 
  title, 
  duration = "0:00",
  autoPlay = false,
  onClose,
  showFullscreenButton = true,
  className = ""
}: CompactVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * totalDuration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeToggle = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleSkip = (seconds: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      const newTime = Math.max(0, Math.min(totalDuration, currentTime + seconds));
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying && !isHovered) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleFullscreen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => setCurrentTime(video.currentTime);
      const handleDurationChange = () => setTotalDuration(video.duration);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleLoadedData = () => setIsLoading(false);

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('durationchange', handleDurationChange);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('durationchange', handleDurationChange);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    } else {
      showControlsTemporarily();
    }
  }, [isHovered]);

  return (
    <div 
      className={`relative w-full h-[180px] bg-black rounded-xl overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={showControlsTemporarily}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={posterSrc}
        autoPlay={autoPlay}
        loop
        playsInline
        onClick={(e) => {
          e.stopPropagation();
          showControlsTemporarily();
        }}
      >
        {/* Using a sample video for demonstration */}
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-[#EF7B7B]/30 border-t-[#EF7B7B] rounded-full"
          />
        </div>
      )}

      {/* Video controls overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between pointer-events-none"
      >
        {/* Top controls */}
        <div className="flex items-start justify-between p-3 pointer-events-auto">
          <div>
            <h3 className="text-white font-medium text-[14px] mb-1">{title}</h3>
            <p className="text-white/70 text-[11px]">Video • {formatTime(totalDuration)}</p>
          </div>
          
          <div className="flex gap-1">
            {onClose && (
              <motion.button
                className="w-7 h-7 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-3 h-3 text-white" />
              </motion.button>
            )}
            
            {showFullscreenButton && (
              <motion.button
                className="w-7 h-7 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition-all"
                onClick={handleFullscreen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Maximize2 className="w-3 h-3 text-white" />
              </motion.button>
            )}
          </div>
        </div>

        {/* Center play button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          <motion.button
            className="w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition-all"
            onClick={handlePlayPause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: isPlaying ? [1, 0, 1] : 1 }}
            transition={{ duration: isPlaying ? 0.3 : 0 }}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
            )}
          </motion.button>
        </div>

        {/* Bottom controls */}
        <div className="p-3 space-y-2 pointer-events-auto">
          {/* Progress bar */}
          <div className="space-y-1">
            <div 
              className="relative h-1 bg-white/20 rounded-full cursor-pointer group"
              onClick={handleSeek}
            >
              <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#EF7B7B] to-[#FF9F9F] rounded-full transition-all duration-150"
                style={{ width: `${totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0}%` }}
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-150"
                style={{ left: `${totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0}%`, transform: 'translateX(-50%) translateY(-50%)' }}
              />
            </div>
            
            <div className="flex justify-between text-white/70 text-[9px]">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(totalDuration)}</span>
            </div>
          </div>

          {/* Control buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.button
                className="w-6 h-6 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                onClick={(e) => handleSkip(-10, e)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SkipBack className="w-3 h-3 text-white" />
              </motion.button>

              <motion.button
                className="w-8 h-8 bg-gradient-to-r from-[#EF7B7B] to-[#FF9F9F] rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-[#EF7B7B]/30 transition-all"
                onClick={handlePlayPause}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-white" fill="currentColor" />
                ) : (
                  <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                )}
              </motion.button>

              <motion.button
                className="w-6 h-6 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                onClick={(e) => handleSkip(10, e)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SkipForward className="w-3 h-3 text-white" />
              </motion.button>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                className="w-6 h-6 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                onClick={handleVolumeToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted ? (
                  <VolumeX className="w-3 h-3 text-white" />
                ) : (
                  <Volume2 className="w-3 h-3 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
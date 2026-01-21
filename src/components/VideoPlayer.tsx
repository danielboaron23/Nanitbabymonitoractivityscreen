import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, SkipBack, SkipForward, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  posterSrc: string;
  title: string;
  duration?: string;
  autoPlay?: boolean;
}

export default function VideoPlayer({ 
  isOpen, 
  onClose, 
  videoSrc, 
  posterSrc, 
  title, 
  duration = "0:00",
  autoPlay = true 
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
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
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * totalDuration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeToggle = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleSkip = (seconds: number) => {
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
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
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

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed inset-0 bg-black z-[200] flex items-center justify-center ${isFullscreen ? '' : 'rounded-[44px] m-4 overflow-hidden'}`}
      onClick={showControlsTemporarily}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#394562] to-[#031229]" />
      
      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showControls ? 1 : 0, scale: showControls ? 1 : 0.8 }}
        className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition-all"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-5 h-5 text-white" />
      </motion.button>

      {/* Video element */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          poster={posterSrc}
          autoPlay={autoPlay}
          loop
          playsInline
          onClick={showControlsTemporarily}
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
              className="w-12 h-12 border-4 border-[#EF7B7B]/30 border-t-[#EF7B7B] rounded-full"
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
          <div className="flex items-start justify-between p-6 pt-16 pointer-events-auto">
            <div>
              <h3 className="text-white font-medium text-[18px] mb-1">{title}</h3>
              <p className="text-white/70 text-[14px]">Baby Memory • {formatTime(totalDuration)}</p>
            </div>
            
            <div className="flex gap-2">
              <motion.button
                className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition-all"
                onClick={handleFullscreenToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isFullscreen ? (
                  <Minimize className="w-5 h-5 text-white" />
                ) : (
                  <Maximize className="w-5 h-5 text-white" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Center play button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <motion.button
              className="w-20 h-20 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition-all"
              onClick={handlePlayPause}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: isPlaying ? [1, 0, 1] : 1 }}
              transition={{ duration: isPlaying ? 0.3 : 0 }}
            >
              {isPlaying ? (
                <Pause className="w-10 h-10 text-white" fill="currentColor" />
              ) : (
                <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
              )}
            </motion.button>
          </div>

          {/* Bottom controls */}
          <div className="p-6 pb-8 space-y-4 pointer-events-auto">
            {/* Progress bar */}
            <div className="space-y-2">
              <div 
                className="relative h-2 bg-white/20 rounded-full cursor-pointer group"
                onClick={handleSeek}
              >
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#EF7B7B] to-[#FF9F9F] rounded-full transition-all duration-150"
                  style={{ width: `${totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0}%` }}
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-150"
                  style={{ left: `${totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                />
              </div>
              
              <div className="flex justify-between text-white/70 text-[12px]">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(totalDuration)}</span>
              </div>
            </div>

            {/* Control buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.button
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  onClick={() => handleSkip(-10)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SkipBack className="w-5 h-5 text-white" />
                </motion.button>

                <motion.button
                  className="w-14 h-14 bg-gradient-to-r from-[#EF7B7B] to-[#FF9F9F] rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-[#EF7B7B]/30 transition-all"
                  onClick={handlePlayPause}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 text-white" fill="currentColor" />
                  ) : (
                    <Play className="w-7 h-7 text-white ml-0.5" fill="currentColor" />
                  )}
                </motion.button>

                <motion.button
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  onClick={() => handleSkip(10)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SkipForward className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  onClick={handleVolumeToggle}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video title overlay */}
      <div className="absolute top-20 left-0 right-0 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : -20 }}
          className="inline-block bg-black/60 backdrop-blur-md rounded-2xl px-4 py-2"
        >
          <h2 className="text-white font-medium text-[16px]">{title}</h2>
        </motion.div>
      </div>
    </motion.div>
  );
}
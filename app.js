import React, { useState, useEffect } from 'react';
import { MessageCircle, Heart, Share, TrendingUp, Users, Eye, Brain, Zap, BarChart3, Globe, Shield, Bell, Search, Plus, Image, Video, Smile, Send } from 'lucide-react';

const SocialIntelligencePlatform = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [aiInsights, setAiInsights] = useState({
    sentiment: 78.5,
    engagement: 92.3,
    reach: 2.4,
    moderation: 99.1
  });

  const mockPosts = [
    {
      id: 1,
      user: {
        name: "Dr. Sarah Chen",
        username: "@sarahchen_ai",
        avatar: "👩‍💼",
        verified: true
      },
      content: "Just published our latest research on neural architecture search! The results show 40% improvement in training efficiency while maintaining 99.2% accuracy. Excited to see how this advances the field. #AI #MachineLearning #Research",
      timestamp: "2 hours ago",
      metrics: {
        likes: 342,
        retweets: 89,
        comments: 23,
        views: 12400
      },
      aiScore: {
        sentiment: 95,
        engagement: 89,
        quality: 92,
        trending: true
      },
      media: null,
      topics: ["AI", "Research", "MachineLearning"]
    },
    {
      id: 2,
      user: {
        name: "TechVentures Inc",
        username: "@techventures",
        avatar: "🏢",
        verified: true
      },
      content: "🚀 Breaking: Our portfolio company just raised $50M Series B to scale their AI-powered healthcare platform. This technology has the potential to revolutionize early disease detection. Proud to support innovation that saves lives! 🏥💡",
      timestamp: "4 hours ago",
      metrics: {
        likes: 1247,
        retweets: 456,
        comments: 78,
        views: 45600
      },
      aiScore: {
        sentiment: 92,
        engagement: 94,
        quality: 88,
        trending: true
      },
      media: "📊",
      topics: ["Funding", "Healthcare", "AI"]
    },
    {
      id: 3,
      user: {
        name: "Alex Rodriguez",
        username: "@alexdev",
        avatar: "👨‍💻",
        verified: false
      },
      content: "Finally solved that distributed systems bug that's been haunting me for weeks! 🐛➡️✅ The issue was in the consensus algorithm - a race condition during leader election. Sometimes the simplest bugs are the hardest to find. #DistributedSystems #Debugging",
      timestamp: "6 hours ago",
      metrics: {
        likes: 89,
        retweets: 12,
        comments: 15,
        views: 3400
      },
      aiScore: {
        sentiment: 85,
        engagement: 72,
        quality: 78,
        trending: false
      },
      media: null,
      topics: ["Programming", "DistributedSystems", "Debugging"]
    },
    {
      id: 4,
      user: {
        name: "AI Ethics Institute",
        username: "@aiethics",
        avatar: "⚖️",
        verified: true
      },
      content: "New study reveals concerning biases in large language models when processing financial advice. We need transparent AI systems that serve all communities equally. Our full report drops Monday. #AIEthics #Bias #FinTech #Responsibility",
      timestamp: "8 hours ago",
      metrics: {
        likes: 567,
        retweets: 234,
        comments: 89,
        views: 23400
      },
      aiScore: {
        sentiment: 72,
        engagement: 87,
        quality: 95,
        trending: true
      },
      media: "📋",
      topics: ["AIEthics", "Bias", "Research"]
    }
  ];

  const trendingTopics = [
    { name: "#AIBreakthrough", posts: "45.2K", growth: "+23%" },
    { name: "#TechInnovation", posts: "32.1K", growth: "+18%" },
    { name: "#DistributedSystems", posts: "18.7K", growth: "+45%" },
    { name: "#MachineLearning", posts: "67.3K", growth: "+12%" },
    { name: "#StartupFunding", posts: "28.9K", growth: "+34%" }
  ];

  useEffect(() => {
    setPosts(mockPosts);
    
    // Simulate real-time AI metrics updates
    const interval = setInterval(() => {
      setAiInsights(prev => ({
        sentiment: Math.max(70, Math.min(95, prev.sentiment + (Math.random() - 0.5) * 2)),
        engagement: Math.max(80, Math.min(98, prev.engagement + (Math.random() - 0.5) * 1)),
        reach: Math.max(2, Math.min(5, prev.reach + (Math.random() - 0.5) * 0.1)),
        moderation: Math.max(95, Math.min(99.9, prev.moderation + (Math.random() - 0.5) * 0.2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePost = () => {
    if (!newPost.trim()) return;
    
    const post = {
      id: posts.length + 1,
      user: {
        name: "You",
        username: "@yourhandle",
        avatar: "🧑‍💻",
        verified: false
      },
      content: newPost,
      timestamp: "now",
      metrics: { likes: 0, retweets: 0, comments: 0, views: 1 },
      aiScore: {
        sentiment: Math.floor(Math.random() * 20) + 75,
        engagement: Math.floor(Math.random() * 30) + 60,
        quality: Math.floor(Math.random() * 25) + 70,
        trending: false
      },
      media: null,
      topics: []
    };
    
    setPosts([post, ...posts]);
    setNewPost('');
  };

  const getEngagementColor = (score) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 75) return 'text-yellow-500';
    return 'text-red-500';
  };

  const PostCard = ({ post }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200">
      {/* User Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="text-3xl">{post.user.avatar}</div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-gray-900">{post.user.name}</h3>
              {post.user.verified && <div className="text-blue-500">✓</div>}
              <span className="text-gray-500">·</span>
              <span className="text-gray-500 text-sm">{post.timestamp}</span>
            </div>
            <p className="text-gray-600 text-sm">{post.user.username}</p>
          </div>
        </div>
        
        {/* AI Insights Badge */}
        <div className="flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
          <Brain size={14} className="text-purple-600 mr-1" />
          <span className="text-xs font-medium text-purple-700">AI Score: {post.aiScore.quality}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed mb-3">{post.content}</p>
        
        {/* Media */}
        {post.media && (
          <div className="bg-gray-100 rounded-lg p-8 text-center text-4xl mb-3">
            {post.media}
          </div>
        )}
        
        {/* Topics */}
        {post.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.topics.map(topic => (
              <span key={topic} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                #{topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* AI Analytics */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-gray-600">Sentiment:</span>
              <span className={`ml-1 font-medium ${getEngagementColor(post.aiScore.sentiment)}`}>
                {post.aiScore.sentiment}%
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">Engagement:</span>
              <span className={`ml-1 font-medium ${getEngagementColor(post.aiScore.engagement)}`}>
                {post.aiScore.engagement}%
              </span>
            </div>
          </div>
          {post.aiScore.trending && (
            <div className="flex items-center text-orange-600">
              <TrendingUp size={12} className="mr-1" />
              <span className="font-medium">Trending</span>
            </div>
          )}
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-6 text-gray-600">
          <button className="flex items-center hover:text-red-500 transition-colors duration-200">
            <Heart size={18} className="mr-1" />
            <span>{post.metrics.likes}</span>
          </button>
          <button className="flex items-center hover:text-blue-500 transition-colors duration-200">
            <MessageCircle size={18} className="mr-1" />
            <span>{post.metrics.comments}</span>
          </button>
          <button className="flex items-center hover:text-green-500 transition-colors duration-200">
            <Share size={18} className="mr-1" />
            <span>{post.metrics.retweets}</span>
          </button>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Eye size={16} className="mr-1" />
          <span>{post.metrics.views.toLocaleString()} views</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Brain className="text-blue-600 mr-3" size={32} />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Social Intelligence Network
                </h1>
                <p className="text-xs text-gray-500">AI-Powered Social Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="AI-enhanced search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 text-sm"
                />
              </div>
              <Bell className="text-gray-600 hover:text-blue-600 cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - AI Insights */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Zap className="text-yellow-500 mr-2" size={20} />
                AI Insights
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Global Sentiment</span>
                    <span className="font-medium text-green-600">{aiInsights.sentiment.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${aiInsights.sentiment}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Engagement Rate</span>
                    <span className="font-medium text-blue-600">{aiInsights.engagement.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${aiInsights.engagement}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Reach (M)</span>
                    <span className="font-medium text-purple-600">{aiInsights.reach.toFixed(1)}M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(aiInsights.reach / 5) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">AI Moderation</span>
                    <span className="font-medium text-emerald-600">{aiInsights.moderation.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${aiInsights.moderation}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <TrendingUp className="text-orange-500 mr-2" size={20} />
                Trending Now
              </h3>
              
              <div className="space-y-3">
                {trendingTopics.map((topic, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2 -mx-2 cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-800">{topic.name}</p>
                      <p className="text-xs text-gray-500">{topic.posts} posts</p>
                    </div>
                    <span className="text-xs font-medium text-green-600">{topic.growth}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Post Composer */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🧑‍💻</div>
                <div className="flex-1">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share your thoughts with AI-powered insights..."
                    className="w-full border-none resize-none focus:outline-none text-lg placeholder-gray-500"
                    rows="3"
                  />
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-gray-500">
                      <Image size={20} className="hover:text-blue-500 cursor-pointer" />
                      <Video size={20} className="hover:text-blue-500 cursor-pointer" />
                      <Smile size={20} className="hover:text-blue-500 cursor-pointer" />
                    </div>
                    
                    <button
                      onClick={handlePost}
                      disabled={!newPost.trim()}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center ${
                        newPost.trim()
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Send size={16} className="mr-2" />
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Right Sidebar - System Stats */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <BarChart3 className="text-indigo-500 mr-2" size={20} />
                Platform Analytics
              </h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5M+</div>
                  <div className="text-sm text-gray-600">Daily Active Users</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2M+</div>
                  <div className="text-sm text-gray-600">Messages/Second</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">94%</div>
                  <div className="text-sm text-gray-600">AI Accuracy

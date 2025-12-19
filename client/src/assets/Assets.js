import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaStar,
  FaSearch,
  FaTimes,
  FaBox,
  FaPalette,
  FaImage,
  FaBullseye,
  FaBolt,
  FaMusic,
  FaMobileAlt,
  FaGamepad,
  FaClipboardList,
  FaWrench,
  FaCode,
  FaDollarSign,
  FaClock,
  FaSun,
  FaMoon
} from 'react-icons/fa';
import {
  WiSunrise,
  WiDaySunny
} from 'react-icons/wi';
import {
  GiModernCity,
  GiGreekTemple,
  GiDoor,
  GiTreeBranch,
  GiMountainCave,
  GiBarrel,
  GiTempleGate,
  GiStoneBlock,
  GiGears
} from 'react-icons/gi';
import {
  IoMdCamera
} from 'react-icons/io';
import {
  BsFileEarmarkPlay
} from 'react-icons/bs';
import {
  MdPhotoLibrary,
  MdMovie
} from 'react-icons/md';
import './Assets.css';
import { useTheme } from '../context/ThemeContext';

const Assets = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Icon mapping function
  const getIconComponent = (iconName) => {
    const icons = {
      'WiSunrise': <WiSunrise />,
      'GiModernCity': <GiModernCity />,
      'FaGamepad': <FaGamepad />,
      'GiGreekTemple': <GiGreekTemple />,
      'GiDoor': <GiDoor />,
      'GiGears': <GiGears />,
      'GiTreeBranch': <GiTreeBranch />,
      'IoMdCamera': <IoMdCamera />,
      'GiMountainCave': <GiMountainCave />,
      'GiBarrel': <GiBarrel />,
      'GiTempleGate': <GiTempleGate />,
      'GiStoneBlock': <GiStoneBlock />
    };
    return icons[iconName] || <FaBox />;
  };

  // Sample asset data with detailed information
  const assets = [
    {
      id: 1,
      name: 'Ultra Dynamic Sky',
      price: 159.99,
      category: 'Environment',
      rating: 4.8,
      reviews: 1975,
      image: 'WiSunrise',
      seller: 'Everett Gunther',
      description: 'A comprehensive dynamic sky and weather system for Unreal Engine. Features fully dynamic time of day, volumetric clouds, realistic sun and moon positioning, and advanced weather effects including rain, snow, and fog.',
      tags: ['Environment', 'Sky', 'Weather', 'Clouds', 'Dynamic'],
      supportedVersions: ['UE 4.26', 'UE 4.27', 'UE 5.0', 'UE 5.1', 'UE 5.2', 'UE 5.3'],
      formats: ['Blueprint', 'C++'],
      fileSize: '2.5 GB',
      faqs: [
        { q: 'Does this work with Lumen?', a: 'Yes, fully compatible with Lumen and hardware ray tracing.' },
        { q: 'Can I customize the sky colors?', a: 'Absolutely! All parameters are exposed and customizable.' },
        { q: 'Is this optimized for mobile?', a: 'A mobile-optimized version is included in the package.' }
      ]
    },
    {
      id: 2,
      name: 'Hyper Environment Building Toolkit',
      price: 199.99,
      category: 'Environment',
      rating: 5.0,
      reviews: 175,
      image: 'GiModernCity',
      seller: 'Hermes by Jbry',
      description: 'Complete modular building system for creating futuristic sci-fi environments. Includes over 500 modular pieces with PBR materials, procedural placement tools, and example maps.',
      tags: ['Sci-Fi', 'Modular', 'Building', 'Architecture', 'Tools'],
      supportedVersions: ['UE 5.0', 'UE 5.1', 'UE 5.2', 'UE 5.3'],
      formats: ['Blueprint', 'Static Meshes', 'Materials'],
      fileSize: '4.8 GB',
      faqs: [
        { q: 'How many pieces are included?', a: 'Over 500 unique modular pieces with variations.' },
        { q: 'Are materials customizable?', a: 'Yes, all materials use master materials with exposed parameters.' }
      ]
    },
    {
      id: 3,
      name: 'Ballplayer Damage and Pain System',
      price: 79.99,
      category: 'Characters',
      rating: 4.9,
      reviews: 280,
      image: 'FaGamepad',
      seller: 'Indie Dev',
      description: 'Advanced damage and pain reaction system for character controllers. Features realistic hit reactions, locational damage, blood effects, and customizable damage types.',
      tags: ['Gameplay', 'Character', 'Damage', 'Animation', 'System'],
      supportedVersions: ['UE 4.27', 'UE 5.0', 'UE 5.1', 'UE 5.2', 'UE 5.3'],
      formats: ['Blueprint', 'Animation'],
      fileSize: '850 MB',
      faqs: [
        { q: 'Does it work with any character?', a: 'Compatible with UE4/UE5 mannequin and most humanoid rigs.' },
        { q: 'Can I customize damage values?', a: 'All damage values and reactions are fully customizable.' }
      ]
    },
    {
      id: 4,
      name: 'Military Old Bunker Tunnel Metal',
      price: 22.99,
      category: 'Environments',
      rating: 4.7,
      reviews: 156,
      image: 'GiGreekTemple',
      seller: 'Quixel',
      description: 'Photorealistic military bunker asset scanned with Megascans technology. Includes 8K textures, LODs, and Nanite support for maximum detail.',
      tags: ['Photogrammetry', 'Military', 'Bunker', 'Props', 'Nanite'],
      supportedVersions: ['UE 4.26', 'UE 4.27', 'UE 5.0+'],
      formats: ['Static Mesh', 'Materials', 'Textures'],
      fileSize: '1.2 GB',
      faqs: [
        { q: 'Is this Nanite optimized?', a: 'Yes, optimized for Nanite with LODs for non-Nanite workflows.' }
      ]
    },
    {
      id: 5,
      name: 'Military Old Bunker Tunnel Hatch',
      price: 22.99,
      category: 'Props',
      rating: 4.6,
      reviews: 142,
      image: 'GiDoor',
      seller: 'Quixel',
      description: 'High-quality bunker hatch prop with opening animation. Photoscanned with PBR materials and collision setup.',
      tags: ['Props', 'Interactive', 'Military', 'Photogrammetry'],
      supportedVersions: ['UE 4.26+', 'UE 5.0+'],
      formats: ['Static Mesh', 'Blueprint', 'Animation'],
      fileSize: '680 MB',
      faqs: [
        { q: 'Can the hatch be opened?', a: 'Yes, includes blueprint with opening/closing animation.' }
      ]
    },
    {
      id: 6,
      name: 'Military Old Bunker Tunnel',
      price: 22.99,
      category: 'Environments',
      rating: 4.8,
      reviews: 189,
      image: 'GiGears',
      seller: 'Quixel',
      description: 'Complete bunker tunnel environment with modular pieces. Photorealistic quality with 8K textures.',
      tags: ['Environment', 'Modular', 'Military', 'Underground'],
      supportedVersions: ['UE 4.26+', 'UE 5.0+'],
      formats: ['Static Mesh', 'Materials'],
      fileSize: '2.1 GB',
      faqs: []
    },
    {
      id: 7,
      name: 'Interactive Foliage Physics - Pro Edition',
      price: 149.98,
      category: 'Tools & Plugins',
      rating: 4.9,
      reviews: 567,
      image: 'GiTreeBranch',
      seller: 'Etherian Studios',
      description: 'Advanced foliage interaction system with wind, character interaction, and GPU-optimized physics. Perfect for creating immersive natural environments.',
      tags: ['Plugin', 'Physics', 'Foliage', 'Vegetation', 'Interaction'],
      supportedVersions: ['UE 4.27', 'UE 5.0', 'UE 5.1', 'UE 5.2', 'UE 5.3'],
      formats: ['C++ Plugin', 'Blueprint'],
      fileSize: '450 MB',
      faqs: [
        { q: 'How is performance?', a: 'Optimized for real-time with GPU instancing and LOD support.' },
        { q: 'Does it work with Speedtree?', a: 'Yes, compatible with Speedtree and all foliage types.' }
      ]
    },
    {
      id: 8,
      name: 'Thumbnailer - Generate Thumbnails',
      price: 199.98,
      category: 'Tools & Plugins',
      rating: 5.0,
      reviews: 234,
      image: 'IoMdCamera',
      seller: 'Indie Dev',
      description: 'Automated thumbnail generation tool for marketplace assets. Capture high-quality renders with customizable lighting, camera angles, and post-processing.',
      tags: ['Tool', 'Utility', 'Rendering', 'Screenshot'],
      supportedVersions: ['UE 4.25+', 'UE 5.0+'],
      formats: ['Editor Plugin'],
      fileSize: '120 MB',
      faqs: [
        { q: 'Can I customize the camera?', a: 'Fully customizable camera positions and angles.' }
      ]
    },
    {
      id: 9,
      name: 'Huge Icelandic Lava Cliff',
      price: 89.99,
      category: 'Environments',
      rating: 4.7,
      reviews: 198,
      image: 'GiMountainCave',
      seller: 'Quixel',
      description: 'Massive photoscanned cliff asset from Iceland with volcanic rock formations. Includes 8K textures and multiple LODs.',
      tags: ['Photogrammetry', 'Nature', 'Cliff', 'Landscape'],
      supportedVersions: ['UE 4.26+', 'UE 5.0+'],
      formats: ['Static Mesh', '8K Textures'],
      fileSize: '3.2 GB',
      faqs: []
    },
    {
      id: 10,
      name: 'Rusty Metal Barrel',
      price: 12.99,
      category: 'Props',
      rating: 4.5,
      reviews: 89,
      image: 'GiBarrel',
      seller: 'Megascans',
      description: 'Photorealistic rusty metal barrel prop. Perfect for industrial and post-apocalyptic scenes.',
      tags: ['Props', 'Industrial', 'Photogrammetry', 'PBR'],
      supportedVersions: ['UE 4.20+', 'UE 5.0+'],
      formats: ['Static Mesh', '4K Textures'],
      fileSize: '180 MB',
      faqs: []
    },
    {
      id: 11,
      name: 'Ancient Temple Theme',
      price: 299.99,
      category: 'Materials & Textures',
      rating: 4.9,
      reviews: 445,
      image: 'GiTempleGate',
      seller: 'Temple Ruins',
      description: 'Complete material library for ancient temple environments. 50+ PBR materials with procedural variation.',
      tags: ['Materials', 'Textures', 'Ancient', 'Stone', 'Temple'],
      supportedVersions: ['UE 4.25+', 'UE 5.0+'],
      formats: ['Material Instances', '4K Textures'],
      fileSize: '5.8 GB',
      faqs: [
        { q: 'How many materials?', a: '50+ unique materials with variations.' }
      ]
    },
    {
      id: 12,
      name: 'Lost Temple Temple Ruin',
      price: 249.99,
      category: 'Environments',
      rating: 4.8,
      reviews: 312,
      image: 'GiStoneBlock',
      seller: 'Lost Temple',
      description: 'Complete ancient temple ruins environment with modular architecture pieces and atmospheric effects.',
      tags: ['Environment', 'Ancient', 'Ruins', 'Modular'],
      supportedVersions: ['UE 5.0+'],
      formats: ['Static Meshes', 'Materials', 'Blueprints'],
      fileSize: '4.5 GB',
      faqs: []
    }
  ];

  const categories = [
    { name: 'All', count: assets.length },
    { name: 'Unity', count: 896 },
    { name: 'Unreal Engine', count: 286 },
    { name: 'UEFN', count: 27 },
    { name: 'Metahuman', count: 876 }
  ];

  const productTypes = [
    { name: '3D', count: 2846, icon: <FaBox /> },
    { name: 'Material & Textures', count: 186, icon: <FaPalette /> },
    { name: 'Sprites & Flipbooks', count: 93, icon: <FaImage /> },
    { name: 'Decals', count: 30, icon: <FaBullseye /> },
    { name: 'HDRI', count: 818, icon: <WiDaySunny /> },
    { name: 'Animations', count: 226, icon: <BsFileEarmarkPlay /> },
    { name: 'Audio', count: 98, icon: <FaMusic /> },
    { name: 'VFX', count: 34, icon: <FaBolt /> },
    { name: 'UI', count: 108, icon: <FaMobileAlt /> },
    { name: 'Game Systems', count: 346, icon: <FaGamepad /> },
    { name: 'Game Templates', count: 764, icon: <FaClipboardList /> },
    { name: 'Tools & Plugins', count: 143, icon: <FaWrench /> },
    { name: 'Code & Examples', count: 183, icon: <FaCode /> }
  ];

  const viewAsset = (asset) => {
    setSelectedAsset(asset);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedAsset(null), 300); // Wait for animation
  };

  const filteredAssets = assets.filter(asset => {
    const matchesCategory = activeCategory === 'All' || asset.category === activeCategory;
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="assets-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h2><MdMovie style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Dymount Studios</h2>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/assets">Assets</Link></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <Link to="/assets">
              <button className="cta-button">Explore Assets</button>
            </Link>
          </div>
        </div>
      </nav >

      <div className="assets-content-wrapper">
        {/* Left Sidebar */}
        <aside className="left-sidebar">


          <div className="sidebar-section">
            <h3>Discover</h3>
            <div className="sidebar-menu">
              <div className="menu-item active">
                <span><FaSearch style={{ marginRight: '8px' }} /> Offers</span>
              </div>
              <div className="menu-item">
                <span><FaClock style={{ marginRight: '8px' }} /> Updated Time Free</span>
              </div>
              <div className="menu-item">
                <span><FaDollarSign style={{ marginRight: '8px' }} /> On sale</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Channels</h3>
            <div className="sidebar-menu">
              {categories.map(cat => (
                <div
                  key={cat.name}
                  className={`menu-item ${activeCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <span>{cat.name}</span>
                  <span className="count">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Product types</h3>
            <div className="sidebar-menu">
              {productTypes.map(type => (
                <div key={type.name} className="menu-item">
                  <span>{type.icon} {type.name}</span>
                  <span className="count">{type.count}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-header">
            <div className="breadcrumb">
              <span>Discover</span>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="search-icon"><FaSearch /></span>
            </div>
          </div>

          <div className="section-title">
            <h2>Quixel</h2>
            <button className="nav-arrow left">‹</button>
            <button className="nav-arrow right">›</button>
          </div>

          <div className="assets-grid">
            {filteredAssets.map(asset => (
              <div key={asset.id} className="asset-card" onClick={() => viewAsset(asset)}>
                <div className="asset-image">
                  <span className="asset-icon-large">{getIconComponent(asset.image)}</span>
                </div>
                <div className="asset-info">
                  <h4>{asset.name}</h4>
                  <p className="seller">{asset.seller}</p>
                  <div className="asset-meta">
                    <span className="rating"><FaStar /> {asset.rating} ({asset.reviews})</span>
                  </div>
                  <div className="asset-footer">
                    <span className="price">From ${asset.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-title">
            <h2>Tools & Plugins</h2>
            <button className="nav-arrow left">‹</button>
            <button className="nav-arrow right">›</button>
          </div>
        </main>

        {/* Right Sidebar - Asset Detail Panel */}
        <aside className={`right-sidebar ${isPanelOpen ? 'open' : ''}`}>
          {selectedAsset && (
            <>
              <div className="panel-header">
                <h3>Asset Details</h3>
                <button className="close-btn" onClick={closePanel}><FaTimes /></button>
              </div>

              <div className="panel-content">
                {/* Asset Preview */}
                <div className="asset-preview">
                  <div className="preview-image">
                    <span className="preview-icon">{getIconComponent(selectedAsset.image)}</span>
                  </div>
                  <h2>{selectedAsset.name}</h2>
                  <p className="asset-seller">by {selectedAsset.seller}</p>
                  <div className="asset-rating-large">
                    <span><FaStar /> {selectedAsset.rating}</span>
                    <span className="review-count">({selectedAsset.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price Section */}
                <div className="detail-section">
                  <div className="price-section">
                    <div className="price-large">${selectedAsset.price}</div>
                    <button
                      className="buy-btn"
                      onClick={() => navigate('/payment', { state: { asset: selectedAsset } })}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div className="detail-section">
                  <h4>Description</h4>
                  <p className="description-text">{selectedAsset.description}</p>
                </div>

                {/* Tags */}
                <div className="detail-section">
                  <h4>Tags</h4>
                  <div className="tags-container">
                    {selectedAsset.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Supported Versions */}
                <div className="detail-section">
                  <h4>Supported Versions</h4>
                  <div className="versions-list">
                    {selectedAsset.supportedVersions.map((version, index) => (
                      <div key={index} className="version-item">
                        <span className="checkmark">✓</span> {version}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Formats */}
                <div className="detail-section">
                  <h4>Formats</h4>
                  <div className="formats-list">
                    {selectedAsset.formats.map((format, index) => (
                      <span key={index} className="format-badge">{format}</span>
                    ))}
                  </div>
                </div>

                {/* File Size */}
                <div className="detail-section">
                  <h4>File Size</h4>
                  <p className="file-size">{selectedAsset.fileSize}</p>
                </div>

                {/* FAQs */}
                {selectedAsset.faqs && selectedAsset.faqs.length > 0 && (
                  <div className="detail-section">
                    <h4>Frequently Asked Questions</h4>
                    <div className="faqs-container">
                      {selectedAsset.faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                          <div className="faq-question">Q: {faq.q}</div>
                          <div className="faq-answer">A: {faq.a}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                <div className="detail-section">
                  <h4>Additional Information</h4>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Category:</span>
                      <span className="info-value">{selectedAsset.category}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Asset ID:</span>
                      <span className="info-value">#{selectedAsset.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </div >
  );
};

export default Assets;

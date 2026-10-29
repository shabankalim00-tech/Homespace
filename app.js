// ==========================================================================
// HOME SPACE INTERIORS - Interactive Master Script
// Founder: Hashim (Interior Designer & Consultant)
// Phone: +91 9711257834 | WhatsApp: +91 9711257834 | Delhi NCR & Noida
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Mobile Menu Logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // 3. Navbar Scroll Shadow & Blur
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 4. Interactive Room Tour Switcher
  const roomData = {
    living: {
      title: 'Luxury Living Room & Cove Ceiling',
      location: 'Sector 75, Noida',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      desc: 'Ambient Gyproc false ceiling with warm 3000K LED coves, fluted wall louvers, custom Italian PU media console, and acoustic sound insulation.',
      specs: [
        'Gyproc Plasterboard Ceiling with 10-Yr Warranty',
        'Warm White 3000K LED Strip & Philips Spotlights',
        'Charcoal & Wooden Fluted Accent Wall Paneling',
        'Floating TV Console in High Gloss PU Finish'
      ],
      price: 'Turnkey Living & Lighting Architecture'
    },
    kitchen: {
      title: 'High-Gloss Acrylic Modular Kitchen',
      location: 'Indirapuram, Ghaziabad',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
      desc: 'BWP Grade 710 calibrated boiling waterproof plywood with anti-scratch acrylic shutters, Hafele soft-close tandem drawers, and quartz countertop.',
      specs: [
        'Century / Greenply BWP 710 Marine Plywood',
        'German Hafele / Hettich Soft-Close Drawers & Carousels',
        '18mm Kalinga Stone Seamless Quartz Counter',
        'Profile Gola Handles & Under-Cabinet LED Lighting'
      ],
      price: 'Full Modular Kitchen with Soft-Close Hardware'
    },
    bedroom: {
      title: 'Master Bedroom & Glass Profile Wardrobe',
      location: 'Greater Noida West',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
      desc: 'Floor-to-ceiling tinted grey profile glass sliding wardrobe with sensor-activated internal warm lighting, velvet jewelry organizer, and king designer bed back.',
      specs: [
        'Anodized Aluminium Profile with Toughened Tinted Glass',
        'Internal Motion Sensor LED Illumination',
        'Soft-Close Telescopic Multi-Tier Drawers',
        'Acoustic Fabric Padded Bed Headboard Paneling'
      ],
      price: 'Master Bedroom with Wardrobes & Lighting'
    },
    ceiling: {
      title: 'Architectural False Ceilings & Lighting',
      location: 'Noida Expressway',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      desc: 'Seamless zero-crack plasterboard ceilings with magnetic track lighting channels, ambient indirect coves, and CNC-cut wooden rafter highlights.',
      specs: [
        'Saint-Gobain Gyproc Certified Framework',
        'Magnetic Low-Voltage Track Lights & Accent Spots',
        'Dimmable Remote-Controlled Smart Lighting',
        'Zero-Crack Fibre Tape & Gypsum Compound Finish'
      ],
      price: 'Saint-Gobain Gyproc & Ambient Cove LED'
    },
    upvc_glass: {
      title: 'Soundproof UPVC French Doors & Glass Partitions',
      location: 'Mahagun Moderne, Noida',
      image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85',
      desc: 'Heavy-duty multi-chamber UPVC sliding balcony doors with double-glazed acoustic glass that cuts outside traffic noise by up to 85%.',
      specs: [
        'Multi-Chamber Steel Reinforced UPVC Profiles',
        'Double Glazed Toughened Acoustic Glass Unit',
        'Multi-Point Locking Safety Hardware',
        'Dust-Proof & Monsoon Rain Water Drainage Tracks'
      ],
      price: 'Acoustic UPVC Double-Glazed Partitions'
    },
    bathroom: {
      title: 'Toughened Glass Shower & Vanity Makeover',
      location: 'Cleo County, Noida',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
      desc: '10mm frameless toughened glass shower partition with SS 304 anti-rust matte black fittings, backlit LED defogger mirror, and floating quartz vanity.',
      specs: [
        '10mm / 12mm Saint-Gobain Toughened Safety Glass',
        'SS 304 Grade Heavy Hinges & Stabilizer Rods',
        'Waterproof Quartz Countertop & Marine Ply Vanity',
        'Anti-Skid Vitrified Tile Installation'
      ],
      price: 'Toughened Glass & Luxury Floating Vanity'
    },
    commercial: {
      title: 'Executive Corporate Office & Glass Cabins',
      location: 'Sector 62, Noida',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      desc: 'Modern collaborative workspaces, soundproof executive cabins with slimline aluminium glass partitions, conference tables, and acoustic ceiling tiles.',
      specs: [
        'Slim-Line Black Powder-Coated Aluminium Partitions',
        '12mm Clear Toughened Glass Cabin Walls',
        'Modular Ergonomic Workstations with Wire Management',
        'Commercial Grade Grid Ceiling & Panel Lights'
      ],
      price: 'Turnkey Executive Office & Acoustic Cabins'
    }
  };

  const roomTabBtns = document.querySelectorAll('.room-tab-btn');
  const roomDisplayImg = document.getElementById('room-display-img');
  const roomDisplayTitle = document.getElementById('room-display-title');
  const roomDisplayLoc = document.getElementById('room-display-loc');
  const roomDisplayDesc = document.getElementById('room-display-desc');
  const roomDisplaySpecs = document.getElementById('room-display-specs');
  const roomDisplayPrice = document.getElementById('room-display-price');
  const roomDisplayWa = document.getElementById('room-display-wa');

  function updateRoomTour(key) {
    const data = roomData[key];
    if (!data) return;

    if (roomDisplayImg) {
      roomDisplayImg.style.opacity = '0.3';
      setTimeout(() => {
        roomDisplayImg.src = data.image;
        roomDisplayImg.alt = data.title;
        roomDisplayImg.style.opacity = '1';
      }, 150);
    }

    if (roomDisplayTitle) roomDisplayTitle.textContent = data.title;
    if (roomDisplayLoc) roomDisplayLoc.textContent = `📍 ${data.location}`;
    if (roomDisplayDesc) roomDisplayDesc.textContent = data.desc;
    if (roomDisplayPrice) roomDisplayPrice.textContent = data.price;

    if (roomDisplaySpecs) {
      roomDisplaySpecs.innerHTML = data.specs.map(item => `
        <li class="flex items-start text-xs sm:text-sm text-slate-700">
          <span class="text-emerald-700 font-bold mr-2 mt-0.5">✓</span>
          <span>${item}</span>
        </li>
      `).join('');
    }

    if (roomDisplayWa) {
      const msg = encodeURIComponent(
        `Hi Hashim Sir! I am interested in your ${data.title} look (${data.location}). Please share quotation details.`
      );
      roomDisplayWa.href = `https://wa.me/919711257834?text=${msg}`;
    }
  }

  roomTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roomTabBtns.forEach(b => {
        b.classList.remove('bg-emerald-950', 'text-white', 'border-brand-gold');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
      });
      btn.classList.add('bg-emerald-950', 'text-white', 'border-brand-gold');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');

      const roomKey = btn.getAttribute('data-room');
      updateRoomTour(roomKey);
    });
  });

  // 5. Interactive Before / After Slider
  const baContainer = document.getElementById('ba-container');
  const baBeforeWrap = document.getElementById('ba-before-wrap');
  const baHandle = document.getElementById('ba-handle');
  const baRange = document.getElementById('ba-range');
  const btnShowBefore = document.getElementById('btn-show-before');
  const btnShowSplit = document.getElementById('btn-show-split');
  const btnShowAfter = document.getElementById('btn-show-after');

  function setSliderPosition(percent) {
    if (!baBeforeWrap || !baHandle) return;
    const clamped = Math.max(0, Math.min(100, percent));
    baBeforeWrap.style.width = `${clamped}%`;
    baHandle.style.left = `${clamped}%`;
    if (baRange) baRange.value = clamped;
  }

  if (baRange) {
    baRange.addEventListener('input', (e) => {
      setSliderPosition(e.target.value);
    });
  }

  if (btnShowBefore) {
    btnShowBefore.addEventListener('click', () => setSliderPosition(100));
  }
  if (btnShowSplit) {
    btnShowSplit.addEventListener('click', () => setSliderPosition(50));
  }
  if (btnShowAfter) {
    btnShowAfter.addEventListener('click', () => setSliderPosition(0));
  }

  // Mouse / Touch Drag Support on Before/After
  if (baContainer) {
    let isDragging = false;

    const onMove = (e) => {
      if (!isDragging) return;
      const rect = baContainer.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const x = clientX - rect.left;
      const pct = (x / rect.width) * 100;
      setSliderPosition(pct);
    };

    baContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      onMove(e);
    });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', onMove);

    baContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      onMove(e);
    }, { passive: true });
    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', onMove, { passive: true });
  }

  // 6. Video Walkthrough Modal Logic
  const videoModal = document.getElementById('video-modal');
  const videoModalClose = document.getElementById('video-modal-close');
  const modalVideoPlayer = document.getElementById('modal-video-player');
  const videoTabBtns = document.querySelectorAll('.video-tab-btn');
  const openVideoBtns = document.querySelectorAll('.open-video-tour');

  const openVideo = (videoSrc = 'living-walkthrough.mp4') => {
    if (videoModal && modalVideoPlayer) {
      modalVideoPlayer.src = videoSrc;
      videoModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      modalVideoPlayer.play().catch(() => {});
    }
  };

  const closeVideo = () => {
    if (videoModal && modalVideoPlayer) {
      modalVideoPlayer.pause();
      modalVideoPlayer.src = '';
      videoModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  openVideoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-video-src') || 'living-walkthrough.mp4';
      openVideo(src);
    });
  });

  if (videoModalClose) videoModalClose.addEventListener('click', closeVideo);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideo();
    });
  }

  videoTabBtns.forEach(tab => {
    tab.addEventListener('click', () => {
      videoTabBtns.forEach(t => {
        t.classList.remove('bg-brand-gold', 'text-slate-900', 'font-bold');
        t.classList.add('bg-slate-800', 'text-slate-300');
      });
      tab.classList.add('bg-brand-gold', 'text-slate-900', 'font-bold');
      tab.classList.remove('bg-slate-800', 'text-slate-300');

      const src = tab.getAttribute('data-video');
      if (modalVideoPlayer && src) {
        modalVideoPlayer.src = src;
        modalVideoPlayer.play().catch(() => {});
      }
    });
  });

  // 7. Lightbox Photo Modal Logic
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryItems = document.querySelectorAll('.lightbox-trigger');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.getAttribute('data-title') || img?.alt || 'Home Space Interiors';
      if (lightboxModal && lightboxImg && img) {
        lightboxImg.src = img.src;
        if (lightboxTitle) lightboxTitle.textContent = title;
        lightboxModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideo();
      closeLightbox();
      closeMenu();
    }
  });

  // 8. Interior Cost Estimator (Delhi NCR & Noida Pricing)
  const calcConfig = document.getElementById('calc-config');
  const calcScope = document.getElementById('calc-scope');
  const calcTier = document.getElementById('calc-tier');
  const calcCostDisplay = document.getElementById('calc-cost-display');
  const calcTimeDisplay = document.getElementById('calc-time-display');
  const calcListDisplay = document.getElementById('calc-items-list');
  const calcWaBtn = document.getElementById('calc-wa-btn');

  const basePricing = {
    '1bhk': { base: 2.8, time: '25-30 Days', sqft: '600 sq.ft' },
    '2bhk': { base: 4.5, time: '30-40 Days', sqft: '950 sq.ft' },
    '3bhk': { base: 6.8, time: '40-50 Days', sqft: '1450 sq.ft' },
    '4bhk': { base: 9.8, time: '50-60 Days', sqft: '2100 sq.ft' },
    'villa': { base: 14.5, time: '60-75 Days', sqft: '3200 sq.ft' },
    'office': { base: 5.5, time: '30-45 Days', sqft: '1200 sq.ft' }
  };

  const scopeMultipliers = {
    'full': { mult: 1.0, label: 'Complete Turnkey Interior' },
    'kitchen': { mult: 0.35, label: 'Modular Kitchen Only' },
    'wardrobe': { mult: 0.30, label: 'Designer Wardrobes Only' },
    'ceiling_paint': { mult: 0.25, label: 'False Ceiling & Royale Paint' },
    'civil_reno': { mult: 0.65, label: 'Complete Civil Renovation' }
  };

  const tierMultipliers = {
    'standard': { mult: 1.0, label: 'Standard Finish (BWR Ply + Hafele)' },
    'premium': { mult: 1.25, label: 'Premium Finish (BWP 710 + PU Polish)' },
    'luxury': { mult: 1.55, label: 'Ultra Luxury (Tinted Profile Glass + Quartz)' }
  };

  function updateCalculator() {
    if (!calcConfig || !calcScope) return;

    const cfg = calcConfig.value;
    const scp = calcScope.value;
    const tier = calcTier ? calcTier.value : 'premium';

    const pInfo = basePricing[cfg] || basePricing['2bhk'];
    const sInfo = scopeMultipliers[scp] || scopeMultipliers['full'];
    const tInfo = tierMultipliers[tier] || tierMultipliers['premium'];

    if (calcCostDisplay) {
      calcCostDisplay.textContent = 'Free 3D Layout & Site Visit';
    }
    if (calcTimeDisplay) {
      calcTimeDisplay.textContent = `⏱️ Estimated Timeline: ${pInfo.time}`;
    }

    if (calcListDisplay) {
      const items = [];
      if (scp === 'full' || scp === 'kitchen') {
        items.push('Modular Kitchen in calibrated BWP 710 marine ply & soft-close tandem drawers');
      }
      if (scp === 'full' || scp === 'wardrobe') {
        items.push('Floor-to-ceiling designer wardrobes with branded hardware & organizer trays');
      }
      if (scp === 'full' || scp === 'ceiling_paint') {
        items.push('Gyproc false ceiling with ambient 3000K warm LED cove lighting & Royale paint');
      }
      if (scp === 'full' || scp === 'civil_reno') {
        items.push('Complete civil work, tile & marble fitting, UPVC doors & aluminium partitions');
      }
      items.push('100% Free on-site 3D layout consultation across Delhi NCR & Noida');
      items.push('Personal site supervision & 10-Year Warranty by Hashim');

      calcListDisplay.innerHTML = items.map(text => `
        <li class="flex items-start text-xs sm:text-sm text-slate-700">
          <span class="text-emerald-700 font-bold mr-2 mt-0.5">✓</span>
          <span>${text}</span>
        </li>
      `).join('');
    }

    if (calcWaBtn) {
      const configText = calcConfig.options[calcConfig.selectedIndex].text;
      const scopeText = sInfo.label;
      const tierText = tInfo.label;
      const waMsg = encodeURIComponent(
        `Hi Hashim Sir! I am planning my home interior with Home Space Interiors:\n• Property: ${configText}\n• Scope: ${scopeText}\n• Finish: ${tierText}\nPlease schedule a free site visit and share recent executed project photos.`
      );
      calcWaBtn.href = `https://wa.me/919711257834?text=${waMsg}`;
    }
  }

  if (calcConfig && calcScope) {
    calcConfig.addEventListener('change', updateCalculator);
    calcScope.addEventListener('change', updateCalculator);
    if (calcTier) calcTier.addEventListener('change', updateCalculator);
    updateCalculator();
  }

  // 9. Portfolio Filter Tabs
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-950', 'text-white', 'border-brand-gold');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
      });
      btn.classList.add('bg-emerald-950', 'text-white', 'border-brand-gold');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');

      const filter = btn.getAttribute('data-filter');
      portfolioItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 10. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-chevron');

    if (btn && answer) {
      btn.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');
        faqItems.forEach(other => {
          const otherAns = other.querySelector('.faq-answer');
          const otherIco = other.querySelector('.faq-chevron');
          if (otherAns) otherAns.classList.add('hidden');
          if (otherIco) otherIco.style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
          answer.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 11. Consultation Lead Form
  const leadForms = document.querySelectorAll('.lead-form');
  leadForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value || 'Client';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      const service = form.querySelector('[name="service"]')?.value || 'Full Turnkey Interior';
      const city = form.querySelector('[name="city"]')?.value || 'Noida';

      const toast = document.getElementById('success-toast');
      if (toast) {
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 5000);
      }

      const text = encodeURIComponent(
        `Hi Hashim Sir! My name is ${name} (${phone}). I require ${service} in ${city}. Please contact me to schedule a free 3D layout site consultation.`
      );
      window.open(`https://wa.me/919711257834?text=${text}`, '_blank');
      form.reset();
    });
  });

  // 12. Hero Background Video Toggle
  const heroVideo = document.getElementById('hero-bg-video');
  const heroVideoToggle = document.getElementById('hero-video-toggle');
  const heroVideoToggleText = document.getElementById('hero-video-toggle-text');

  if (heroVideo && heroVideoToggle) {
    heroVideoToggle.addEventListener('click', () => {
      if (heroVideo.paused) {
        heroVideo.play().catch(() => {});
        const icon = heroVideoToggle.querySelector('i');
        if (icon) icon.setAttribute('data-lucide', 'pause');
        if (heroVideoToggleText) heroVideoToggleText.textContent = 'Pause Video';
      } else {
        heroVideo.pause();
        const icon = heroVideoToggle.querySelector('i');
        if (icon) icon.setAttribute('data-lucide', 'play');
        if (heroVideoToggleText) heroVideoToggleText.textContent = 'Play Video';
      }
      if (window.lucide) lucide.createIcons();
    });
  }

  // 13. Service Filter Tabs
  const serviceTabBtns = document.querySelectorAll('.service-tab-btn');
  const serviceItems = document.querySelectorAll('.service-item');

  if (serviceTabBtns.length > 0 && serviceItems.length > 0) {
    serviceTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-service-filter');

        // Update button states
        serviceTabBtns.forEach(b => {
          b.classList.remove('bg-brand-gold', 'text-slate-950', 'shadow-md');
          b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
        });
        btn.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
        btn.classList.add('bg-brand-gold', 'text-slate-950', 'shadow-md');

        // Filter cards
        serviceItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });

        if (window.lucide) lucide.createIcons();
      });
    });
  }
});

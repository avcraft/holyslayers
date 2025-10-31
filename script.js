// Data for Ranks: Demon Slayer Ranks translated to Catholic Spiritual Disciplines
const rankData = [
    {
        rank: "Mizunoto",
        description: "The **Novice Rank (The Purificative Way)**. The Slayer begins the spiritual journey by establishing the foundational disciplines that shape their soul. This includes waking each morning with the **Morning Offering**, attending **Sunday Mass consistently**, and praying the **Act of Contrition** at night. At this stage, the focus is on **habitual obedience**, punctuality in prayer, and the cultivation of humility, mirroring St. Benedict’s first steps: fear of God and detachment from selfish will. Daily Gospel reading (5-10 minutes, e.g., the Gospel of John) develops attention and receptivity to grace. Every small victory in consistency is a sword sharpened for the spiritual battle ahead.",
        image: "images/Mizunoe — Morning and Evening Prayer.png",
        requirements: "Survive the Final Selection (Baptism/Confirmation). Establish **Morning and Evening Prayer** (e.g., the *Morning Offering* and the *Act of Contrition*). Commit to **Daily Gospel Reading** (5-10 minutes of a specific book, e.g., the Gospel of John). Achieve **100% attendance at Sunday Mass** for three months.",
    },
    {
        rank: "Mizunoe",
        description: "The second stage emphasizes **fortitude and vocal prayer**. Slayers wield the Rosary as a spiritual weapon, confronting temptations with consistency and courage. Daily recitation of **five decades of the Rosary** trains the mind to focus while cultivating devotion to the Blessed Virgin. The **formal Act of Spiritual Communion** strengthens interior life, and embracing ascetic practices (like fasting from luxuries or enduring minor discomforts) mirrors St. Francis de Sales’ call to holiness in ordinary life. This stage integrates **discipline and vigilance**, preparing the Slayer to resist the subtle allure of worldly attachments.",
        image: "images/Mizunoe — Sunday Liturgy.png",
        requirements: "Maintain the daily prayer habit. Complete **five decades of the Rosary daily**. Master the **formal Act of Spiritual Communion**. Demonstrate discipline by embracing **Ascetic Practice**—e.g., cold showers, or **fasting from a specific luxury** two days per week.",
    },
    {
        rank: "Kanoto",
        description: "The **Intermediate Rank**. Here, the Slayer learns to integrate **sacramental life and the armor of virtue**. Frequent confession (twice per month) and nightly **Examination of Conscience** (5-10 minutes) cultivate self-knowledge and purification. Applying Steps 1-4 of Benedictine Humility (Fear of God, Detachment from Own Will, Obedience, Patience) makes each action a reflection of divine order. Saints like St. Augustine and St. Ignatius offer models of interior vigilance, helping the Slayer discern sin, temptation, and grace in the details of daily life.",
        image: "images/Kanoto - Confessions.png",
        requirements: "Attend **Confession at least twice per month**. Commit to an **Intensive Examination of Conscience** nightly (5-10 minutes, using a method like St. Ignatius’s). Successfully apply and live out **Steps 1-4 of Benedictine Humility** (Fear of God, Detachment from Own Will, Obedience, Patience).",
    },
    {
        rank: "Kanoe",
        description: "The **Mid-level Rank**. Slayers engage in **Mental Prayer (Meditation)**, entering silent communion with Christ. This involves 30 minutes daily of meditation on the Passion, practicing **Lectio Divina**, or reflecting on spiritual classics like St. Alphonsus Liguori’s *Practice of the Love of Jesus Christ*. Praying the full Divine Office (Lauds and Vespers) trains the soul in rhythm and attentiveness. The Slayer begins to **interiorize virtue**, strengthening patience, humility, and charity in daily interactions, turning ordinary moments into spiritual triumphs.",
        image: "images/Kanoe — Spiritual Reading.png",
        requirements: "Commit to **30 minutes of daily Mental Prayer** (e.g., reflecting on the Passion, or *Lectio Divina*). Begin reading and reflecting on a classic spiritual text (e.g., *The Practice of the Love of Jesus Christ* by St. Alphonsus Liguori). **Pray the full Divine Office (Liturgy of the Hours)**—Morning and Evening Prayer (Lauds and Vespers).",
    },
    {
        rank: "Tsuchinoto",
        description: "The **Upper-mid Rank** focuses on **fraternal charity** and societal engagement. Slayers practice visible acts of grace—tithing 10% of income, performing corporal works of mercy, visiting the sick or imprisoned. Steps 5-8 of Benedictine Humility (Confession of Faults, Acceptance of Vileness, Contentment with Simplicity) are lived daily. The Slayer’s example radiates virtue, encouraging others in their spiritual battles. Saints like St. Vincent de Paul or St. Teresa of Calcutta inspire the active charity and self-emptying love characteristic of this stage.",
        image: "images/Tsuchinoto - Fasting.png",
        requirements: "Establish a habit of **financial tithing** (a set percentage, e.g., 10%). Perform **two consistent works of corporal mercy** (e.g., feeding the hungry, visiting the imprisoned). Successfully implement **Steps 5-8 of Benedictine Humility** (Confession of Faults, Acceptance of Vileness, Contentment with Simplicity).",
    },
    {
        rank: "Tsuchinoe",
        description: "The **Senior Rank (The Illuminative Way)**. Spiritual trials intensify as God purifies the senses. The Slayer practices **silent Adoration** for 45 minutes daily, studies sections of the Catechism, and strives to conquer a major vice. Saints like St. John of the Cross and St. Teresa of Ávila exemplify this stage: deep interior detachment and clarity emerge from perseverance. The Slayer begins to operate less from feelings and more from **principled union with God**, cultivating wisdom, discernment, and an unshakable interior life.",
        image: "images/Tsuchinoe - Works of Mercy.png",
        requirements: "Achieve the discipline of **silent Adoration of the Blessed Sacrament** (or Spiritual Adoration) for 45 minutes daily. Begin systematic **study of the Catechism** (completion of one section). Successfully conquer a **major personal vice** (a capital sin) for one continuous year.",
    },
    {
        rank: "Hinoto",
        description: "The **Near-elite Rank**. Slayers endure the **Dark Night of the Senses**, a trial in which all consolations in prayer are removed. Daily prayer continues despite dryness, and Steps 9-11 of Benedictine Humility (Silence, Restraint from Laughter, Deliberate Speech) are fully implemented. Reading the Mystics (St. John of the Cross, St. Teresa) guides the Slayer through the interior desert. Faith, Hope, and Charity become the anchor amid spiritual aridity, shaping a soul resilient to both temptation and distraction.",
        image: "images/Hinoto — Devotion to Mary.png",
        requirements: "Endure a period of spiritual dryness (lack of sensible devotion) for **90 continuous days**, maintaining the full prayer routine. Demonstrate mastery over **Steps 9-11 of Benedictine Humility** (Silence, Restraint from Laughter, Deliberate Speech). Begin reading the Mystics (e.g., St. John of the Cross).",
    },
    {
        rank: "Hinoe",
        description: "The final stage before sanctity. Slayers confront the **Dark Night of the Soul**, enduring trials that purify the intellect and the will. Spiritual consolation is completely removed, leaving only total abandonment to Divine Providence. Every action, thought, and decision is offered in perfect obedience and detachment. Saints like St. Catherine of Siena and St. Thérèse of Lisieux illustrate this surrender: the soul is refined by fire, and love becomes the singular motive behind every act.",
        image: "images/Hinoe - Liturgical Participation.png",
        requirements: "Survive an extended encounter with a Lower Rank Demon (the purification of the intellect and memory) by relying completely on **perfect abandonment** to Divine Providence. Achieve **total detachment** from all spiritual consolation.",
    },
    {
        rank: "Kinoto",
        description: "The **Elite Rank (The Unitive Way)**. Slayers dwell in **Transforming Union** with God. Virtue flows habitually; Charity, Prudence, Fortitude, Justice, and Temperance shape every action. The soul is like St. Francis de Sales’ or St. Benedict’s ideal: consistently humble, peaceful, and detached. All 12 Steps of Benedictine Humility are fully lived, making constant humility and heroic virtue a natural state. Slayers inspire others not just by deeds but by the calm, radiant witness of grace.",
        image: "images/Kinoto - Spiritual Direction.png",
        requirements: "Demonstrate a life marked by **heroic virtue** (Charity, Prudence, Fortitude, Justice, Temperance) witnessed by peers. Achieve a state of **perfect interior peace** and total conformity to God's will. Successfully implement **all 12 Steps of Benedictine Humility**, making the final step (Constant Humility) a natural state of being.",
    },
    {
        rank: "Hashira",
        description: "The nine highest-ranking Slayers, now Saints, exemplify the **Crown of Glory**. They master the spiritual Breath Style, reflecting Christ’s grace fully in their lives. Their witness transforms societies, fights spiritual evils, and inspires holiness in countless souls. Canonized examples or those living heroic virtue serve as models. The Slayer at this stage moves effortlessly in grace, performing extraordinary acts of charity and heroic virtue, attaining the ultimate spiritual victory and eternal reward.",
        image: "images/Hashira - Canonized Saints.png",
        requirements: "Defeat a major societal evil (e.g., leading thousands to conversion or battling a pervasive heresy) OR achieve a life of heroic virtue as attested by **The Holy See (Canonization)** while holding the Kinoto rank.",
    },
];


// Function to render Rank Cards
const renderRanks = () => {
    const container = document.getElementById('rank-container');
    if (!container) return; 

    container.innerHTML = '';
    rankData.forEach((rank, index) => {
        const card = document.createElement('div');
        card.classList.add('rank-card');
        card.setAttribute('data-rank-index', index);

        card.innerHTML = `
            <img src="${rank.image}" alt="${rank.rank}">
            <h3 class="rank-title">${rank.rank}</h3>
            <p class="rank-description">${rank.description}</p>
        `;
        card.addEventListener('click', () => openModal(rank));
        container.appendChild(card);
    });
};

// Function to handle page switching (ONLY used by index.html for Home/Ranks)
const togglePage = (targetId) => {
    // Hide all page sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // Toggle Home Button visibility based on the page
    const homeBtn = document.getElementById('home-button');
    if (homeBtn) {
        // Hide the Home button only when on the Home page
        homeBtn.classList.toggle('hidden', targetId === 'home-area');
    }
};

// Function to open the rank detail modal
const openModal = (rank) => {
    const modal = document.getElementById('rank-modal');
    if (!modal) return;
    
    document.getElementById('modal-image').src = rank.image;
    document.getElementById('modal-image').alt = rank.rank;
    document.getElementById('modal-title').textContent = rank.rank;
    document.getElementById('modal-description').textContent = rank.description;
    document.getElementById('modal-requirements').textContent = `Requirements: ${rank.requirements}`;
    modal.classList.remove('hidden');
};

// Function to close the rank detail modal
const closeModal = () => {
    const modal = document.getElementById('rank-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
};

// Function to toggle dark mode
const toggleTheme = () => {
    document.body.classList.toggle('dark');
};

// Initialization function
const init = () => {
    const header = document.querySelector('header');
    const headerContent = document.querySelector('.header-content');
    
    // Check if we are on index.html (Home/Ranks) or GreatestHashiras.html
    if (document.getElementById('home-area')) {
        
        // --- INDEX.HTML NAVIGATION SETUP (Home & Ranks page) ---
        
        // Inject Home Button (after the header-content div)
        const homeButton = document.createElement('button');
        homeButton.id = 'home-button';
        homeButton.textContent = 'Home';
        homeButton.classList.add('nav-button', 'hidden'); 
        header.insertBefore(homeButton, headerContent.nextSibling);

        // Inject Theme Toggle Button (after Home button)
        const themeToggle = document.createElement('button');
        themeToggle.id = 'theme-toggle';
        themeToggle.innerHTML = '🌙';
        header.insertBefore(themeToggle, homeButton.nextSibling);

        // Inject NEW True Hashiras Link (after Theme Toggle)
        const hashiraLink = document.createElement('a');
        hashiraLink.href = 'GreatestHashiras.html'; // Link to the new page
        hashiraLink.textContent = 'True Hashiras';
        hashiraLink.classList.add('nav-button');
        hashiraLink.id = 'hashira-link';
        header.insertBefore(hashiraLink, themeToggle.nextSibling);

    } else {
        // --- GREATESTHASHIRAS.HTML NAVIGATION SETUP ---
        
        // Inject Theme Toggle Button (find where the existing link is)
        const themeToggle = document.createElement('button');
        themeToggle.id = 'theme-toggle';
        themeToggle.innerHTML = '🌙';
        
        const navLink = document.querySelector('header a.nav-button');
        // Insert the Theme Toggle after the existing Home/Ranks link
        header.insertBefore(themeToggle, navLink ? navLink.nextSibling : headerContent.nextSibling);
    }

    // Event Listeners (apply to both pages if elements exist)
    const themeToggleEl = document.getElementById('theme-toggle');
    if (themeToggleEl) {
        themeToggleEl.addEventListener('click', toggleTheme);
    }
    
    const modalClose = document.getElementById('modal-close');
    const rankModal = document.getElementById('rank-modal');

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (rankModal) {
        // Close modal when clicking outside
        rankModal.addEventListener('click', (e) => {
            if (e.target.id === 'rank-modal') {
                closeModal();
            }
        });

        // Home Page Action Button Listener (only on index.html)
        const viewRanksBtn = document.getElementById('view-ranks-btn');
        if (viewRanksBtn) {
             viewRanksBtn.addEventListener('click', () => {
                togglePage('rank-list-area');
            });
        }

        // Home Nav Button Listener (only on index.html)
        const homeNavBtn = document.getElementById('home-button');
        if (homeNavBtn) {
            homeNavBtn.addEventListener('click', () => {
                togglePage('home-area');
            });
        }
        
        // Initial page setup for index.html
        renderRanks(); // Render ranks once
        togglePage('home-area'); // Start on the home page
    }
};

document.addEventListener('DOMContentLoaded', init);
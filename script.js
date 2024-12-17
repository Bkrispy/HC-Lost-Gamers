// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sample roster data - you can modify this with your actual guild members
const rosterData = [
    { 
        name: 'Shadowstrike', 
        class: 'Rogue',
        spec: 'Combat',
        role: 'DPS',
        rank: 'Officer',
        level: 60
    },
    { 
        name: 'Lightbringer', 
        class: 'Paladin',
        spec: 'Protection',
        role: 'Tank',
        rank: 'Guild Master',
        level: 60
    },
    { 
        name: 'Naturefury', 
        class: 'Druid',
        spec: 'Restoration',
        role: 'Healer',
        rank: 'Raider',
        level: 60
    },
    { 
        name: 'Frostbolt', 
        class: 'Mage',
        spec: 'Frost',
        role: 'DPS',
        rank: 'Raider',
        level: 60
    },
    { 
        name: 'Soulreaper', 
        class: 'Warlock',
        spec: 'Affliction',
        role: 'DPS',
        rank: 'Officer',
        level: 60
    },
    { 
        name: 'Holylight', 
        class: 'Priest',
        spec: 'Holy',
        role: 'Healer',
        rank: 'Raider',
        level: 60
    }
];

// Populate roster grid with enhanced styling
const rosterGrid = document.querySelector('.roster-grid');
if (rosterGrid) {
    rosterData.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = `member-card ${member.class.toLowerCase()}`;
        memberCard.innerHTML = `
            <div class="member-header">
                <h3>${member.name}</h3>
                <span class="rank">${member.rank}</span>
            </div>
            <div class="member-info">
                <p><span>Class:</span> ${member.class}</p>
                <p><span>Spec:</span> ${member.spec}</p>
                <p><span>Role:</span> ${member.role}</p>
                <p><span>Level:</span> ${member.level}</p>
            </div>
        `;
        rosterGrid.appendChild(memberCard);
    });
}

// Add header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
});



    const font = 'Slant';
    figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts' });
    figlet.preloadFonts([font], ready);



   
const projectsList = [
    {
        name: 'Movie Manager API',
        description: 'REST API for managing movies, with full CRUD and user registration/login.',
        skills: 'FastAPI, SQLAlchemy, Pydantic, JWT, Pytest, Docker, AWS EC2',
        LinkRepository:'https://github.com/Mijelam/FASTAPI'
    },
    {
        name: 'ScoutManagement',
        description: 'Internal web app for a Scout group, learning Java and Spring Boot.',
        skills: 'Java, Spring Boot, MySQL, Spring MVC, Thymeleaf, Mockito, Docker, AWS EC2, GitHub Actions',
        LinkRepository:'https://github.com/Mijelam/ScoutManagement'
    },
    {
        name: 'NoirCBR',
        description: 'Converts images to grayscale quickly using parallel processing.',
        skills: 'Python, multiprocessing, CBR to JPG conversion',
        LinkRepository:'https://github.com/Mijelam/NoirCBR'
    },
    {
        name: 'SuperStore Analysis',
        description: 'Analyzes the Superstore dataset, generating charts and Excel reports.',
        skills: 'Python, pandas, matplotlib, openpyxl',
        LinkRepository:'https://github.com/Mijelam/Superstore'
    },
    {
        name: 'TelegramBot',
        description: 'Telegram bot that gives weather info and downloads YouTube videos as MP3s.',
        skills: 'Python, requests, FFmpeg, Telegram API,Weather API',
        LinkRepository:'https://github.com/Mijelam/TelegramBot'
    },
    {
        name: 'MiniBlog',
        description: 'Blog with authentication, post management and  security using Django.',
        skills: 'Python, Django, SQLite3, Authentication, ModelForms, CSRF',
        LinkRepository:'https://github.com/Mijelam/MiniBlog'
    },
    {
        name: 'Mini-SIEM',
        description: 'Live security alert simulator using Spring Boot.',
        skills: 'Java, Spring Boot, H2, Web Dashboard, Event Simulation',
        LinkRepository:'https://github.com/Mijelam/Mini-Siem'
    },
    {
        name: 'GravitySim',
        description: 'Simulation of gravitational bodies using Pygame and physics concepts.',
        skills: 'Python, Pygame, N-body Simulation, Newton’s Law',
        LinkRepository:'https://github.com/Mijelam/GravitySim'
    },
    {
        name: 'condominioApiRest',
        description: 'REST API for condominium management, with resident handling, payments, notifications via email and secure JWT-based authentication.',
        skills: 'Java 21, Spring Boot 3.5.5, Spring Security, JWT, MySQL, Spring Data JPA, OpenAPI/Swagger, Thymeleaf, Maven, Docker, SonarQube, JaCoCo',
        LinkRepository:'https://github.com/Mijelam/condominioAPI'
}
];

 const url = 'https://v2.jokeapi.dev/joke/Programming';
 const commands = {
    help() {
        
        const availableCommands = Object.keys(commands);
        const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
        term.echo('<white>Available commands: ' + formatter.format(availableCommands) + '</white>');
    },
    echo(...args) {
        
        term.echo('<green>' + args.join(' ') + '</green>');
    },
    about() {
        
    
      term
        .echo('<white>                USER PROFILE                  </white>')
        .echo('<white>┌────────────────────────────────────────────┐</white>')
        .echo('<white>│                                            │</white>')
        .echo('<white>│ Worked on real-world projects using Scrum  │</white>')
        .echo('<white>│ methodology, with Django, FastAPI, Java,   │</white>')
        .echo('<white>│ SQL,Spring boot, JWT,Docker and AWS.       │</white>')
        .echo('<white>│                                            │</white>')
        .echo('<white>│                                            │</white>')
        .echo('<white>│ Currently learning: PL/SQL, Flutter, and   │</white>')
        .echo('<white>│ pursuing Google Cybersecurity Professional │</white>')
        .echo('<white>│ Certificate. Focused on scripting, Linux   │</white>')
        .echo('<white>│            & system analysis.              │</white>')
        .echo('<white>│                                            │</white>')
        .echo('<white>│ My skills:                                 │</white>')
        .echo('<white>│ Languages: Python, Java, SQL (MySQL,       │</white>')
        .echo('<white>│ SQLite, Oracle)                            │</white>')
        .echo('<white>│ Frameworks/Libraries: Django, Django REST  │</white>')
        .echo('<white>│ Framework, FastAPI, Pandas, NumPy,         │</white>')
        .echo('<white>│ Matplotlib,Spring boot                     │</white>')
        .echo('<white>│ Dev Tools: Git, Docker, Postman, AWS (EC2) │</white>')
        .echo('<white>│ Environments: VS Code, IntelliJ IDEA,      │</white>')
        .echo('<white>│ Windows, Linux, Terminal, VirtualBox       │</white>')
        .echo('<white>│ Languages spoken: Spanish (native),        │</white>')
        .echo('<white>│ English (B1)                               │</white>')
        .echo('<white>└────────────────────────────────────────────┘</white>')
        .resume();

    },
     pwd() {
        
        term.echo('<white>/home/Miguel/terminal-portfolio</white>');
    },

       ls(...args) {
    if (args.includes('-a') || args.includes('-la') || args.includes('-al')) {
        term.echo('<white>Nothing to see here... </white>'); 
        return;
    }

    const files = [
        '403_secrets.txt',
        'assets/',
        'top_secret.txt',
        'do_not_open.exe',
        'maybe_a_backup.zip',
        'hack_the_planet.sh',
        'funny_cat.jpeg',
        '404_not_found.txt',
        'backup_final_final2.zip',
        'selfie_from_server.jpg',
        'legacy_code_1999.cpp',
        'very_important_notes.md',
        'not_a_clone_repo.git',
        'sudo_not_allowed.txt',
        'unpack_me.zip',
        'changelog_old_version.txt',
        'encrypted_wallet.key',
        'do_not_delete.db',
        'shiny_new_feature.txt',
        'definitely_not_a_zero_day_exploit.tar.gz'
    ];

    
    const ordered = files.slice().sort((a,b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true }));

    if (args.includes('-a') || args.includes('-la') || args.includes('-al')) {
        term.echo('<white>Nothing to see here </white>');
        return;
    }

    
    ordered.forEach(file => term.echo('<white>' + file + '</white>'));
},
    cd(target = '') {
    const t = String(target).trim();

    if (t === '403_secrets.txt') {
        term.echo('<white>I admit I enjoy pineapple on pizza</white>');
        return;
    }

    
    const randomReplies = [
        'This directory is on a lunch break. Try later.',
        'Hacking attempt  Nice try, script kiddie.',
        'There is nothing for you here. Move along.',
        'Accessing this folder requires 3D chess skills.',
        'This folder is guarded by a firewall dragon ',
        'This directory is locked with quantum encryption ',
        'You have entered the Bermuda Triangle of directories.',
        'This folder is protected by a CAPTCHA challenge.',
        'Access denied. This directory is on vacation.',
        'This directory is protected by an army of virtual squirrels.'
    ];
    const reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
    term.echo('<white>' + reply + '</white>');
    },
    contact() {
    term.echo('<white> Reach me on:</white>');
    term.echo('<green>GitHub:</green> <a href="https://github.com/Mijelam" target="_blank">github.com/Mijelam</a>');
    term.echo('<green>Linkedin:</green> <a href="https://www.linkedin.com/in/miguel-alvarez-728910248/" target="_blank">https://www.linkedin.com/in/miguel-alvarez-728910248/</a>');
    term.echo('<green>Email:</green> MiguelAngelo_lll@hotmail.com');
    term.echo('<green>Phone:</green> +57 314 344 1529');
},
        async joke() {
        const res = await fetch(url);
        const data = await res.json();

        if (data.type === 'twopart') {
            this.animation(async () => {
                await this.echo(rainbow(data.setup), { delay: 50, typing: true });
                await new Promise(r => setTimeout(r, 500));
                await this.echo(rainbow(data.delivery), { delay: 50, typing: true });
            });
        } else if (data.type === 'single') {
            this.animation(async () => {
                await this.echo(`<dodgerblue>${data.joke}</dodgerblue>`, { delay: 50, typing: true });
            });
        }
    }
    
};
    
    commands.projects = function() {
        term.echo('<white>My projects:</white>\n');
        
        projectsList.forEach(proj => {
            term.echo(`<dodgerblue>${proj.name}</dodgerblue>`); 
            term.echo(`<white>${proj.description}</white>`);
            term.echo(`<white>Technologies / Learned:</white> ${proj.skills}`);
            if(proj.LinkRepository) {
                term.echo(`<white>Repo:</white> <a href="${proj.LinkRepository}" target="_blank">[GitHub]</a>`);
            }
            term.echo('──────────────────────────────────────────────\n'); 
        });
    };



    const term = $('body').terminal(commands, {
        greetings: false,
        checkArity: false,
        html: true
        
    });

    

   function render(text) {
    const cols = term.cols(); 
    return figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    });
}
function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}
function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}
function ready() {
    const seed = rand(256);
const width = 63; 

    function padCenter(text, width) {
        const totalPadding = width - text.length;
        const padLeft = Math.floor(totalPadding / 2);
        const padRight = totalPadding - padLeft;
        return ' '.repeat(padLeft) + text + ' '.repeat(padRight);
    }

    
    term.echo(() => rainbow(render('Hello friend.mov'), seed));

    
    term.echo('<white>┌' + '─'.repeat(width) + '┐</white>');
    term.echo('<white>│' + padCenter('Hello! I am Miguel', width) + '│</white>');
    term.echo('<white>│' + padCenter('Backend developer & cybersecurity practitioner in training.', width) + '│</white>');
    term.echo('<white>│' + padCenter('Currently building web apps and exploring security topics.', width) + '│</white>');
     
    const helpText = 'Use "help" to see available commands and projects.';
    const centeredHelp = padCenter(helpText, width);
    const helpHtml = centeredHelp.replace('"help"', '<dodgerblue>"help"</dodgerblue>');
    term.echo('<white>│' + helpHtml + '│</white>');

    term.echo('<white>└' + '─'.repeat(width) + '┘</white>\n');

    
    term.resume();

   

   
}

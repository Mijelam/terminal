/* ========= 1. FIGLET SETUP ========= */

const font = 'Slant';

figlet.defaults({
    fontPath: 'https://unpkg.com/figlet/fonts'
});

figlet.preloadFonts([font], start);


/* ========= 2. COMMANDS ========= */

const url = 'https://v2.jokeapi.dev/joke/Programming';

const commands = {
   
    async joke() {
        const res = await fetch(url);
        const data = await res.json();

        if (data.type === 'twopart') {
            this.animation(async () => {
                await this.echo(rainbow(data.setup), { typing: true, delay: 40 });
                await new Promise(r => setTimeout(r, 500));
                await this.echo(rainbow(data.delivery), { typing: true, delay: 40 });
            });
        } else {
            this.animation(async () => {
                await this.echo(rainbow(data.joke), { typing: true, delay: 40 });
            });
        }
    },
    whoami() {
    term.echo('');
    term.echo('<white>Name:</white> Miguel Alvarez');
    term.echo('<white>Degree:</white> Computer Science');
    term.echo('<white>Background:</white> Web development (backend)');
    term.echo('<white>Current focus:</white> Web development, with growing interest in security and SOC roles');
    term.echo('<white>Location:</white> Colombia');
    term.echo('');
    },
    toolset() {
        term.echo('');
        term.echo('<white>OS:</white> Linux, Windows');

        term.echo('');
        term.echo('<white>Languages:</white> Python, Java');
        term.echo('<white>Backend:</white> FastAPI, Spring Boot, Flask');

        term.echo('');
        term.echo('<white>Databases:</white> MySQL, SQLite, Oracle,PLSQL, PostgreSQL');
        

        term.echo('');
        term.echo('<white>DevOps / Cloud:</white> Git, GitHub Actions, AWS EC2');

        term.echo('');
        term.echo('<white>Testing & Quality:</white>');
        term.echo('  - Katalon, Artillery, Pairwise Testing');
        term.echo('  - OWASP ZAP');
        term.echo('  - SonarQube, PITest');

        term.echo('');
        term.echo('<white>Languages </white> Spanish (native), English (B1)');
        term.echo('');
    },

    contact() {
    term.echo('');
    term.echo('<white>Contact information:</white>');
    term.echo('');
    term.echo('<white>Email:</white> <dodgerblue>MiguelAngelo_lll@hotmail.com</dodgerblue>');
    term.echo(
        '<white>LinkedIn:</white> ' +
        '<a href="https://www.linkedin.com/in/miguel-alvarez-728910248/" ' +
        'target="_blank" style="color:dodgerblue; text-decoration:none;">' +
        'linkedin.com/in/miguel-alvarez-728910248</a>'
    );
    term.echo('');
    term.echo('');
},

projects() {
    term.echo('');
    term.echo('<white>FEATURED PROJECTS</white>');
    term.echo('<gray>────────────────────────────────</gray>');
    

    term.echo('<dodgerblue>1) Condominio API</dodgerblue>');
    term.echo('<white>Backend system for condominium management, built from scratch with a team following Scrum.</white>');
    term.echo('<white>Requirements were defined through client feedback and user stories.</white>');
    term.echo('<white>Includes JWT authentication, CI/CD pipeline, code quality checks with Sonar, and Jira for project management.</white>');
    term.echo('<white>Tech:</white> Spring Boot, Spring Security, JWT, MySQL, Docker');
    term.echo('<white>Screenshots available in the repository.</white>');
    term.echo(
        '<white>Repo:</white> ' +
        '<a href="https://github.com/Mijelam/condominioAPI" target="_blank" ' +
        'style="color:dodgerblue; text-decoration:none;">github.com/Mijelam/condominioAPI</a>'
    );
    term.echo('');
    term.echo('');

    term.echo('<dodgerblue>2) ScoutManagement</dodgerblue>');
    term.echo('<white>Web application for managing a local Scout group, built from scratch with a team following Scrum.</white>');
    term.echo('<white>Requirements were defined through client feedback and user stories.</white>');
    term.echo('<white>Strong focus on quality assurance, including unit testing and multiple testing strategies.</white>');
    term.echo('<white>Testing tools:</white> Katalon, OWASP ZAP, Artillery, PITest, W3C Validator, Pairwise Testing');
    term.echo('<white>Tech:</white> Java, Spring Boot, Thymeleaf, MySQL, CI/CD');
    term.echo('<white>Screenshots available in the repository.</white>');
    term.echo(
        '<white>Repo:</white> ' +
        '<a href="https://github.com/Mijelam/ScoutManagement" target="_blank" ' +
        'style="color:dodgerblue; text-decoration:none;">github.com/Mijelam/ScoutManagement</a>'
    );
    term.echo('');

    term.echo('<gray>────────────────────────────────</gray>');
    term.echo('<white>More projects:</white>');
    term.echo('<gray>Other small projects where I explored Flutter basics, parallel scripting and REST API built with FastAPI</gray>');
    term.echo(
        '<a href="https://github.com/Mijelam?tab=repositories" target="_blank" ' +
        'style="color:dodgerblue; text-decoration:none;">github.com/Mijelam</a>'
    );
    term.echo('');
},
writeups() {
    term.echo('');
    term.echo('<white>Write-ups:</white> Bandit (OverTheWire) — Linux fundamentals: permissions, users, processes, networking basics.');
    term.echo(
        '<a href="https://github.com/Mijelam/OverTheWire-Bandit" target="_blank" ' +
        'style="color:dodgerblue; text-decoration:none;">github.com/Mijelam</a>'
    );
    term.echo('');
},
    clear() {
        term.clear();
    },


};


/* ========= 3. TERMINAL ========= */

const term = $('body').terminal(commands, {
    greetings: false,
    html: true,
    prompt: function () {
        return (
            '<white>Miguel@portfolio:~$</white> ' +
            '<gray>[</gray>' +
            '<dodgerblue>whoami</dodgerblue><gray> | </gray>' +
            '<dodgerblue>toolset</dodgerblue><gray> | </gray>' +
            '<dodgerblue>projects</dodgerblue><gray> | </gray>' +
            '<dodgerblue>writeups</dodgerblue><gray> | </gray>' +
            '<dodgerblue>clear</dodgerblue><gray> | </gray>' +
            '<dodgerblue>joke</dodgerblue><gray> | </gray>' +
            '<dodgerblue>contact</dodgerblue>' +
            '<gray>]</gray> '
        );
    }
    

});


/* ========= 4. HELPER FUNCTIONS ========= */

function render(text) {
    return figlet.textSync(text, {
        font: font,
        width: term.cols(),
        whitespaceBreak: true
    });
}

function rainbow(text) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;#${hex(color)};]${char}]`;
    }, text).join('');
}

function hex(color) {
    return [color.red, color.green, color.blue]
        .map(n => n.toString(16).padStart(2, '0'))
        .join('');
}


/* ========= 5. START ========= */

function start() {
    const ascii = render('Hello friend.mov');

    ascii.split('\n').forEach((line, i) => {
        term.echo(rainbow(line, i * 10));
    });

    term.echo('');
    term.echo(
    '<white>Welcome to my portfolio. This is an interactive way to ' +
    '<dodgerblue>explore my work</dodgerblue> and ' +
    '<dodgerblue>learn about me</dodgerblue>.' +
    '</white>'
    );
    term.echo('');
    term.echo('<white>Type one of the available commands to begin</white>');
    term.echo('');
    term.resume();
}





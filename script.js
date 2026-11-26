const namesOfAllah = [
    ["الرَّحْمَٰن", "Ar-Rahman", "The Most Compassionate"],
    ["الرَّحِيم", "Ar-Raheem", "The Most Merciful"],
    ["الْمَلِك", "Al-Malik", "The King"],
    ["الْقُدُّوس", "Al-Quddus", "The Most Holy"],
    ["السَّلَام", "As-Salaam", "The Source of Peace"],
    ["الْمُؤْمِن", "Al-Mu'min", "The Giver of Faith and Security"],
    ["الْمُهَيْمِن", "Al-Muhaymin", "The Guardian"],
    ["الْعَزِيز", "Al-Azeez", "The Almighty"],
    ["الْجَبَّار", "Al-Jabbar", "The Compeller"],
    ["الْمُتَكَبِّر", "Al-Mutakabbir", "The Supremely Great"],
    ["الْخَالِق", "Al-Khaaliq", "The Creator"],
    ["الْبَارِئ", "Al-Baari", "The Originator"],
    ["الْمُصَوِّر", "Al-Musawwir", "The Fashioner"],
    ["الْغَفَّار", "Al-Ghaffaar", "The All-Forgiving"],
    ["الْقَهَّار", "Al-Qahhaar", "The Subduer"],
    ["الْوَهَّاب", "Al-Wahhaab", "The Bestower"],
    ["الرَّزَّاق", "Ar-Razzaaq", "The Provider"],
    ["الْفَتَّاح", "Al-Fattaah", "The Opener"],
    ["الْعَلِيم", "Al-Aleem", "The All-Knowing"],
    ["الْقَابِض", "Al-Qaabid", "The Withholder"],
    ["الْبَاسِط", "Al-Baasit", "The Expander"],
    ["الْخَافِض", "Al-Khaafid", "The One Who Lowers"],
    ["الرَّافِع", "Ar-Raafi", "The One Who Raises"],
    ["الْمُعِزّ", "Al-Mu'izz", "The Bestower of Honor"],
    ["الْمُذِلّ", "Al-Mudhill", "The One Who Humbles"],
    ["السَّمِيع", "As-Samee", "The All-Hearing"],
    ["الْبَصِير", "Al-Baseer", "The All-Seeing"],
    ["الْحَكَم", "Al-Hakam", "The Judge"],
    ["الْعَدْل", "Al-Adl", "The Just"],
    ["اللَّطِيف", "Al-Lateef", "The Most Gentle"],
    ["الْخَبِير", "Al-Khabeer", "The All-Aware"],
    ["الْحَلِيم", "Al-Haleem", "The Forbearing"],
    ["الْعَظِيم", "Al-Azeem", "The Magnificent"],
    ["الْغَفُور", "Al-Ghafoor", "The Great Forgiver"],
    ["الشَّكُور", "Ash-Shakoor", "The Appreciative"],
    ["الْعَلِيّ", "Al-Aliyy", "The Most High"],
    ["الْكَبِير", "Al-Kabeer", "The Most Great"],
    ["الْحَفِيظ", "Al-Hafeez", "The Preserver"],
    ["الْمُقِيت", "Al-Muqeet", "The Sustainer"],
    ["الْحَسِيب", "Al-Haseeb", "The Reckoner"],
    ["الْجَلِيل", "Al-Jaleel", "The Majestic"],
    ["الْكَرِيم", "Al-Kareem", "The Most Generous"],
    ["الرَّقِيب", "Ar-Raqeeb", "The Watchful"],
    ["الْمُجِيب", "Al-Mujeeb", "The One Who Responds"],
    ["الْوَاسِع", "Al-Waasi", "The All-Encompassing"],
    ["الْحَكِيم", "Al-Hakeem", "The All-Wise"],
    ["الْوَدُود", "Al-Wadood", "The Most Loving"],
    ["الْمَجِيد", "Al-Majeed", "The Most Glorious"],
    ["الْبَاعِث", "Al-Baa'ith", "The Resurrector"],
    ["الشَّهِيد", "Ash-Shaheed", "The Ever-Witnessing"],
    ["الْحَقّ", "Al-Haqq", "The Truth"],
    ["الْوَكِيل", "Al-Wakeel", "The Trustee"],
    ["الْقَوِيّ", "Al-Qawiyy", "The Most Strong"],
    ["الْمَتِين", "Al-Mateen", "The Firm"],
    ["الْوَلِيّ", "Al-Waliyy", "The Protecting Friend"],
    ["الْحَمِيد", "Al-Hameed", "The Praiseworthy"],
    ["الْمُحْصِي", "Al-Muhsi", "The One Who Counts All"],
    ["الْمُبْدِئ", "Al-Mubdi", "The Originator"],
    ["الْمُعِيد", "Al-Mueed", "The Restorer"],
    ["الْمُحْيِي", "Al-Muhyi", "The Giver of Life"],
    ["الْمُمِيت", "Al-Mumeet", "The Bringer of Death"],
    ["الْحَيّ", "Al-Hayy", "The Ever-Living"],
    ["الْقَيُّوم", "Al-Qayyoom", "The Self-Subsisting"],
    ["الْوَاجِد", "Al-Waajid", "The Perceiver"],
    ["الْمَاجِد", "Al-Maajid", "The Most Noble"],
    ["الْوَاحِد", "Al-Waahid", "The One"],
    ["الْأَحَد", "Al-Ahad", "The Unique"],
    ["الصَّمَد", "As-Samad", "The Eternal Refuge"],
    ["الْقَادِر", "Al-Qaadir", "The All-Powerful"],
    ["الْمُقْتَدِر", "Al-Muqtadir", "The All-Determining"],
    ["الْمُقَدِّم", "Al-Muqaddim", "The One Who Brings Forward"],
    ["الْمُؤَخِّر", "Al-Mu'akhkhir", "The One Who Puts Back"],
    ["الْأَوَّل", "Al-Awwal", "The First"],
    ["الْآخِر", "Al-Aakhir", "The Last"],
    ["الظَّاهِر", "Az-Zaahir", "The Manifest"],
    ["الْبَاطِن", "Al-Baatin", "The Hidden"],
    ["الْوَالِي", "Al-Waali", "The Governor"],
    ["الْمُتَعَالِي", "Al-Muta'aali", "The Most Exalted"],
    ["الْبَرّ", "Al-Barr", "The Source of Goodness"],
    ["التَّوَّاب", "At-Tawwaab", "The Accepter of Repentance"],
    ["الْمُنْتَقِم", "Al-Muntaqim", "The Just Retributor"],
    ["الْعَفُوّ", "Al-Afuww", "The Pardoner"],
    ["الرَّؤُوف", "Ar-Ra'oof", "The Most Kind"],
    ["مَالِكُ الْمُلْك", "Maalik-ul-Mulk", "The Owner of All Sovereignty"],
    ["ذُو الْجَلَالِ وَالْإِكْرَام", "Dhul-Jalaali wal-Ikraam", "The Lord of Majesty and Honor"],
    ["الْمُقْسِط", "Al-Muqsit", "The Equitable"],
    ["الْجَامِع", "Al-Jaami", "The Gatherer"],
    ["الْغَنِيّ", "Al-Ghaniyy", "The Self-Sufficient"],
    ["الْمُغْنِي", "Al-Mughni", "The Enricher"],
    ["الْمَانِع", "Al-Maani", "The Preventer"],
    ["الضَّارّ", "Ad-Daarr", "The One Who Allows Adversity"],
    ["النَّافِع", "An-Naafi", "The Giver of Benefit"],
    ["النُّور", "An-Noor", "The Light"],
    ["الْهَادِي", "Al-Haadi", "The Guide"],
    ["الْبَدِيع", "Al-Badee", "The Incomparable Originator"],
    ["الْبَاقِي", "Al-Baaqi", "The Everlasting"],
    ["الْوَارِث", "Al-Waarith", "The Inheritor"],
    ["الرَّشِيد", "Ar-Rasheed", "The Guide to the Right Way"],
    ["الصَّبُور", "As-Saboor", "The Most Patient"],
];

const urduMeanings = [
    "نہایت مہربان",
    "بہت رحم فرمانے والا",
    "بادشاہ",
    "نہایت پاک",
    "سلامتی دینے والا",
    "امن و امان دینے والا",
    "نگہبان",
    "غالب و زبردست",
    "زبردست قوت والا",
    "بڑائی کے لائق",
    "پیدا کرنے والا",
    "عدم سے وجود میں لانے والا",
    "صورت بنانے والا",
    "بہت بخشنے والا",
    "سب پر غالب",
    "بہت عطا کرنے والا",
    "رزق دینے والا",
    "کھولنے اور فیصلہ کرنے والا",
    "سب کچھ جاننے والا",
    "روکنے والا",
    "کشادگی دینے والا",
    "پست کرنے والا",
    "بلند کرنے والا",
    "عزت دینے والا",
    "ذلت دینے والا",
    "سب کچھ سننے والا",
    "سب کچھ دیکھنے والا",
    "فیصلہ کرنے والا",
    "انصاف کرنے والا",
    "نہایت باریک بین اور مہربان",
    "ہر بات سے باخبر",
    "بردبار",
    "عظمت والا",
    "بہت معاف کرنے والا",
    "قدر فرمانے والا",
    "سب سے بلند",
    "سب سے بڑا",
    "حفاظت فرمانے والا",
    "سب کو قوت دینے والا",
    "حساب لینے والا",
    "جلال والا",
    "بہت کرم کرنے والا",
    "نگہبانی کرنے والا",
    "دعائیں قبول کرنے والا",
    "وسعت والا",
    "حکمت والا",
    "محبت فرمانے والا",
    "بزرگی والا",
    "دوبارہ زندہ کرنے والا",
    "سب کا گواہ",
    "حق",
    "کارساز",
    "بڑی قوت والا",
    "نہایت مضبوط",
    "دوست اور مددگار",
    "تعریف کے لائق",
    "ہر چیز کا شمار رکھنے والا",
    "پہلی بار پیدا کرنے والا",
    "دوبارہ پیدا کرنے والا",
    "زندگی دینے والا",
    "موت دینے والا",
    "ہمیشہ زندہ",
    "سب کو قائم رکھنے والا",
    "ہر چیز کو پانے والا",
    "بزرگی اور شرف والا",
    "ایک",
    "یکتا",
    "بے نیاز اور سب کا سہارا",
    "ہر چیز پر قدرت رکھنے والا",
    "کامل قدرت والا",
    "آگے کرنے والا",
    "پیچھے کرنے والا",
    "سب سے پہلا",
    "سب سے آخر",
    "ظاہر",
    "پوشیدہ",
    "حاکم و نگہبان",
    "سب سے بلند و برتر",
    "نیکی فرمانے والا",
    "توبہ قبول کرنے والا",
    "بدلہ دینے والا",
    "معاف کرنے والا",
    "نہایت شفقت فرمانے والا",
    "تمام بادشاہی کا مالک",
    "جلال اور بزرگی والا",
    "انصاف قائم کرنے والا",
    "جمع کرنے والا",
    "بے نیاز",
    "غنی کرنے والا",
    "روکنے والا",
    "جس کے حکم سے نقصان پہنچتا ہے",
    "نفع دینے والا",
    "نور",
    "ہدایت دینے والا",
    "بے مثال پیدا کرنے والا",
    "ہمیشہ باقی رہنے والا",
    "سب کا وارث",
    "سیدھی راہ دکھانے والا",
    "بہت صبر کرنے والا",
];

const namesGrid = document.querySelector("#namesGrid");
const splashScreen = document.querySelector("#splashScreen");
const appContent = document.querySelector("#appContent");
const splashNextButton = document.querySelector("#splashNextButton");
const appHeading = document.querySelector("#appHeading");

if (!namesGrid) {
    throw new Error('Could not find the names grid. Add an element with id="namesGrid".');
}

if (!splashScreen || !appContent || !splashNextButton || !appHeading) {
    throw new Error("The splash screen or app content is missing required elements.");
}

if (namesOfAllah.length !== 99) {
    throw new Error(`Expected 99 names, but found ${namesOfAllah.length}.`);
}

if (urduMeanings.length !== namesOfAllah.length) {
    throw new Error(`Expected ${namesOfAllah.length} Urdu meanings, but found ${urduMeanings.length}.`);
}

splashNextButton.addEventListener("click", () => {
    splashScreen.classList.add("is-leaving");
    const transitionDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 420;

    window.setTimeout(() => {
        splashScreen.hidden = true;
        appContent.hidden = false;
        appHeading.focus({ preventScroll: true });
    }, transitionDelay);
});

const audioStatus = document.createElement("p");
audioStatus.className = "audio-status";
audioStatus.id = "audioStatus";
audioStatus.setAttribute("role", "status");
audioStatus.setAttribute("aria-live", "polite");
namesGrid.before(audioStatus);

namesOfAllah.forEach(([arabic, transliteration, meaning], index) => {
    const card = document.createElement("article");
    card.className = "name-card";
    card.style.setProperty("--card-order", String(index % 8));

    const number = document.createElement("span");
    number.className = "name-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const arabicName = document.createElement("p");
    arabicName.className = "name-arabic";
    arabicName.lang = "ar";
    arabicName.dir = "rtl";
    arabicName.textContent = arabic;

    const name = document.createElement("h2");
    name.className = "name-english";
    name.textContent = transliteration;

    const explanation = document.createElement("p");
    explanation.className = "name-meaning";
    explanation.textContent = `English: ${meaning}`;

    const urduExplanation = document.createElement("p");
    urduExplanation.className = "name-meaning-urdu";
    urduExplanation.lang = "ur";
    urduExplanation.dir = "rtl";
    urduExplanation.textContent = `اردو: ${urduMeanings[index]}`;

    const listenButton = document.createElement("button");
    listenButton.className = "speak-button";
    listenButton.type = "button";
    listenButton.textContent = "Listen";
    listenButton.setAttribute("aria-label", `Listen to ${transliteration} in Arabic`);
    listenButton.addEventListener("click", () => {
        if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
            audioStatus.textContent = "Audio pronunciation is not supported by this browser.";
            return;
        }

        window.speechSynthesis.cancel();
        const pronunciation = new SpeechSynthesisUtterance(arabic);
        pronunciation.lang = "ar-SA";

        const arabicVoice = window.speechSynthesis
            .getVoices()
            .find((voice) => voice.lang.toLowerCase().startsWith("ar"));

        if (arabicVoice) {
            pronunciation.voice = arabicVoice;
        }

        pronunciation.onstart = () => {
            audioStatus.textContent = `Playing: ${transliteration}`;
        };
        pronunciation.onend = () => {
            audioStatus.textContent = "";
        };
        pronunciation.onerror = () => {
            audioStatus.textContent = "Could not play audio. Check that your browser has an Arabic speech voice.";
        };

        window.speechSynthesis.speak(pronunciation);
    });

    card.append(number, arabicName, name, explanation, urduExplanation, listenButton);
    namesGrid.append(card);
});

const cards = namesGrid.querySelectorAll(".name-card");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
} else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    cards.forEach((card) => revealObserver.observe(card));
}

const installButton = document.querySelector("#installAppButton");
let installPromptEvent = null;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPromptEvent = event;
    installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
    if (!installPromptEvent) {
        audioStatus.textContent = "Use your browser menu and choose Install app or Add to Home Screen.";
        return;
    }

    const promptEvent = installPromptEvent;
    installPromptEvent = null;
    installButton.hidden = true;

    try {
        await promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        audioStatus.textContent = choice.outcome === "accepted"
            ? "App installation started."
            : "App installation was cancelled.";
    } catch (error) {
        audioStatus.textContent = "Could not open the installation prompt. Try your browser menu.";
        console.error("App installation prompt failed:", error);
    }
});

window.addEventListener("appinstalled", () => {
    installButton.hidden = true;
    installPromptEvent = null;
    audioStatus.textContent = "App installed successfully.";
});

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
        console.error("Service worker registration failed:", error);
    });
}

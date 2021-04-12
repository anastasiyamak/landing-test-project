var modalTeamMemberInfo = document.getElementById("modal");
var closeButton = document.querySelectorAll(".close-btn");

var playVideoBtn = document.querySelectorAll(".play-video-btn");
var modalVideoPlayer = document.getElementById("modalVideoPlayer");
var closeVideoBtn = document.querySelectorAll(".close-player-btn");

var teamMembersWrapper = document.getElementById('members-wrapper');
var teamMembersBlock = document.querySelectorAll('.team-member-block');

var maxWidth870 = window.matchMedia("(max-width: 870px)");

var swiper

var teamMembersInfo = [
    {
        name: 'Edgar Morrison',
        position: 'CEO',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet'
    },
    {
        name: 'Mae Martin',
        position: 'CTO',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet'
    },
    {
        name: 'David Banks',
        position: 'CFO',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet'
    },
    {
        name: 'Frederick Parsons',
        position: 'COO',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet'
    },
]

function memberClicked(position) {
    modalTeamMemberInfo.style.display = "flex"
    var info = teamMembersInfo[position]
    document.getElementById("modal-content-name").textContent = info.name
    document.getElementById("modal-content-position").textContent = info.position
    document.getElementById("modal-content-text").textContent = info.text
}

closeButton.forEach(function (item) {
    item.onclick = function () {
        modalTeamMemberInfo.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
})

function navItemClicked(menuItemPosition) {
    var navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function (item, position) {
        if (position == menuItemPosition) {
            if (!item.classList.contains('nav-item--active')) {
                item.classList.add("nav-item--active")
            }
        } else {
            item.classList.remove("nav-item--active")
        }
    })
}

playVideoBtn.forEach(function (item) {
    item.onclick = function () {
        modalVideoPlayer.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
})

closeVideoBtn.forEach(function (item) {
    item.onclick = function () {
        modalVideoPlayer.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
})

function adoptMembersBlock() {

    var isMatches = maxWidth870.matches

    isMatches ? teamMembersWrapper.className = "swiper-wrapper" : teamMembersWrapper.className = "team-members"

    for (var i = 0; i < teamMembersBlock.length; i++) {
        var singleBlockClassList = teamMembersBlock[i]
        isMatches ? singleBlockClassList.className = 'swiper-slide' : singleBlockClassList.className = 'team-member-block'
    }

    isMatches ? initSwiper() : tryToDestroySwiper()
}

function initSwiper() {
    swiper = new Swiper('.swiper-container', {
        spaceBetween: 10,
        freeMode: false,
        loop: true,
        centeredSlides: false,
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            650: {
                slidesPerView: 3,
            }
        }
    })
}

function tryToDestroySwiper() {
    if (swiper != undefined) {
        swiper.destroy(true, true)
    }
}

try {
    maxWidth870.addEventListener('change', (e) => {
        adoptMembersBlock()
    });
} catch (e1) {
    try {
        // deprecated method used for safari support :(
        maxWidth870.addListener((e) => {
            adoptMembersBlock()
        });
    } catch (e2) {
        console.error(e2);
    }
}


adoptMembersBlock();

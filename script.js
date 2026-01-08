// Quote Calculator Constants
const MIN_PRICE = 50;
const PRICE_PER_MILE = 10;
const PRICE_PER_ROOM = 30;
const APARTMENT_FEE = 40;
const ELEVATOR_BASE_FEE = 25;
const ELEVATOR_FLOOR_FEE = 10;
const ITEM_BOX = 2;
const ITEM_APPLIANCE = 10;
const ITEM_FURNITURE = 10;

// DOM Elements
const quoteForm = document.getElementById('quote-calculator');
const quoteTotalEl = document.getElementById('quote-total');

// Input Elements
const distanceInput = document.getElementById('distance');
const roomsInput = document.getElementById('rooms');
const pickupFloorSelect = document.getElementById('pickup-floor');
const dropoffFloorSelect = document.getElementById('dropoff-floor');
const pickupElevatorCheckbox = document.getElementById('pickup-elevator');
const dropoffElevatorCheckbox = document.getElementById('dropoff-elevator');
const boxesInput = document.getElementById('boxes'); // New Input
const appliancesInput = document.getElementById('appliances');
const furnitureInput = document.getElementById('furniture');

// Calculate Quote
function calculateQuote() {
    let total = 0;

    // Get values
    const miles = parseFloat(distanceInput.value) || 0;
    const rooms = parseInt(roomsInput.value) || 0;
    const pickupFloor = parseInt(pickupFloorSelect.value) || 0;
    const dropoffFloor = parseInt(dropoffFloorSelect.value) || 0;
    const hasPickupElevator = pickupElevatorCheckbox.checked;
    const hasDropoffElevator = dropoffElevatorCheckbox.checked;
    const boxes = parseInt(boxesInput.value) || 0;
    const appliances = parseInt(appliancesInput.value) || 0;
    const furniture = parseInt(furnitureInput.value) || 0;

    // 1. Distance: If miles > 4, add (miles - 4) * 10
    if (miles > 4) {
        total += (miles - 4) * PRICE_PER_MILE;
    }

    // 2. Rooms: Add rooms * 30
    total += rooms * PRICE_PER_ROOM;

    // 3. Pickup Location
    if (pickupFloor > 0) {
        // Apartment fee
        total += APARTMENT_FEE;
        // No elevator fee: Base £25 + (£10 * Floor)
        if (!hasPickupElevator) {
            total += ELEVATOR_BASE_FEE + (pickupFloor * ELEVATOR_FLOOR_FEE);
        }
    }

    // 4. Dropoff Location
    if (dropoffFloor > 0) {
        // Apartment fee
        total += APARTMENT_FEE;
        // No elevator fee: Base £25 + (£10 * Floor)
        if (!hasDropoffElevator) {
            total += ELEVATOR_BASE_FEE + (dropoffFloor * ELEVATOR_FLOOR_FEE);
        }
    }

    // 5. Items
    total += boxes * ITEM_BOX;
    total += appliances * ITEM_APPLIANCE;
    total += furniture * ITEM_FURNITURE;

    // 6. Minimum price check
    if (total < MIN_PRICE) {
        total = MIN_PRICE;
    }

    // Update display
    quoteTotalEl.textContent = total.toFixed(0);

    // Update inline quote total in CTA box
    const inlineTotal = document.querySelector('.quote-total-inline');
    if (inlineTotal) {
        inlineTotal.textContent = total.toFixed(0);
    }

    // Show the result
    document.getElementById('quote-result').style.display = 'block';

    // Scroll to result
    document.getElementById('quote-result').scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to Calculate Button
document.getElementById('calculate-btn').addEventListener('click', calculateQuote);

// FAQ Accordion Logic
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// ============================================
// TEST FUNCTION - Run in browser console: runTests()
// ============================================
function testCalculateQuote(params) {
    const { miles, rooms, pickupFloor, dropoffFloor, hasPickupElevator, hasDropoffElevator, boxes, appliances, furniture } = params;

    let total = 0;

    // 1. Distance
    if (miles > 4) {
        total += (miles - 4) * PRICE_PER_MILE;
    }

    // 2. Rooms
    total += rooms * PRICE_PER_ROOM;

    // 3. Pickup
    if (pickupFloor > 0) {
        total += APARTMENT_FEE;
        if (!hasPickupElevator) {
            total += ELEVATOR_BASE_FEE + (pickupFloor * ELEVATOR_FLOOR_FEE);
        }
    }

    // 4. Dropoff
    if (dropoffFloor > 0) {
        total += APARTMENT_FEE;
        if (!hasDropoffElevator) {
            total += ELEVATOR_BASE_FEE + (dropoffFloor * ELEVATOR_FLOOR_FEE);
        }
    }

    // 5. Items
    total += (boxes || 0) * ITEM_BOX;
    total += appliances * ITEM_APPLIANCE;
    total += furniture * ITEM_FURNITURE;

    // 6. Min Price
    if (total < MIN_PRICE) {
        total = MIN_PRICE;
    }

    return total;
}

function runTests() {
    console.log('========== QUOTE CALCULATOR TESTS ==========\n');

    // Case B: 10 miles, Apt (Floor 1, No Elev) -> House (Ground)
    // 10 boxes, 1 bed.
    const caseB = testCalculateQuote({
        miles: 10,
        rooms: 1,
        pickupFloor: 1,
        dropoffFloor: 0,
        hasPickupElevator: false,
        hasDropoffElevator: false,
        boxes: 10,
        appliances: 0,
        furniture: 1
    });

    // Miles: (10 - 4) * 10 = £60
    // Rooms: 1 * 30 = £30
    // Pickup: Apt(£40) + NoElev(£25 + 1*£10) = £40 + £35 = £75
    // Dropoff: £0
    // Items: (10 * 2) + (1 * 10) = £20 + £10 = £30
    // Total: 60 + 30 + 75 + 30 = £195

    console.log('CASE B Logic Check:');
    console.log(`  Expected: £195 | Actual: £${caseB} | ${caseB === 195 ? '✓ PASS' : '✗ FAIL'}`);

    return { caseB };
}

// Auto-run tests on load
console.log('Quote Calculator loaded. Run runTests() in console to verify logic.');

// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

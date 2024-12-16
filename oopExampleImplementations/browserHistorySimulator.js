class HistoryNode {
    constructor(url, title) {
        this.url = url;
        this.title = title;
        this.prev = null;
        this.next = null;
    }
}

class BrowserHistory {
    constructor() {
        this.current = null;
        this.length = 0;
    }

    // Navigate to a new page
    visit(url, title) {
        const newPage = new HistoryNode(url, title);

        if (!this.current) {
            // First page visit
            this.current = newPage;
        } else {
            // Truncate forward history when a new page is visited
            if (this.current.next) {
                this.current.next = null;
            }

            // Link the new page
            this.current.next = newPage;
            newPage.prev = this.current;
            this.current = newPage;
        }

        this.length++;
        return this.current;
    }

    // Go back in history
    back() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
            return this.current;
        }
        return null;
    }

    // Go forward in history
    forward() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            return this.current;
        }
        return null;
    }

    // Get current page details
    getCurrentPage() {
        return this.current;
    }

    // Print entire history for debugging
    printHistory() {
        let current = this.current;
        // Go to the first node
        while (current && current.prev) {
            current = current.prev;
        }

        console.log("Browser History:");
        while (current) {
            console.log(`${current.title} (${current.url})${current === this.current ? ' <-- Current' : ''}`);
            current = current.next;
        }
    }
}

// Test the BrowserHistory
function testBrowserHistory() {
    const browserHistory = new BrowserHistory();

    // Visit some pages
    browserHistory.visit("google.com", "Google");
    browserHistory.visit("stackoverflow.com", "Stack Overflow");
    browserHistory.visit("github.com", "GitHub");

    console.log("Current Page:", browserHistory.getCurrentPage().title);

    // Go back
    const backPage = browserHistory.back();
    console.log("After going back, current page:", backPage.title);

    // Go back again
    const furtherBackPage = browserHistory.back();
    console.log("After going back again, current page:", furtherBackPage.title);

    // Go forward
    const forwardPage = browserHistory.forward();
    console.log("After going forward, current page:", forwardPage.title);

    // Print full history
    browserHistory.printHistory();
}

// Run the test
testBrowserHistory();
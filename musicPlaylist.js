class Song {
    constructor(title, artist, duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration; // in seconds
        this.prev = null;
        this.next = null;
    }
}

class Playlist {
    constructor(name) {
        this.name = name;
        this.head = null;
        this.current = null;
        this.length = 0;
    }

    // Add a song to the end of the playlist
    addSong(title, artist, duration) {
        const newSong = new Song(title, artist, duration);

        if (!this.head) {
            // First song in playlist
            this.head = newSong;
            this.current = newSong;
        } else {
            // Find the last song and append
            let last = this.head;
            while (last.next) {
                last = last.next;
            }
            last.next = newSong;
            newSong.prev = last;
        }

        this.length++;
        return newSong;
    }

    // Remove a song by title
    removeSong(title) {
        if (!this.head) return false;

        // Check head node
        if (this.head.title === title) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            this.length--;
            return true;
        }

        let current = this.head;
        while (current) {
            if (current.title === title) {
                // Adjust previous node's next pointer
                if (current.prev) current.prev.next = current.next;
                // Adjust next node's prev pointer
                if (current.next) current.next.prev = current.prev;
                this.length--;
                return true;
            }
            current = current.next;
        }

        return false;
    }

    // Play next song
    next() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            return this.current;
        }
        return null;
    }

    // Play previous song
    previous() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
            return this.current;
        }
        return null;
    }

    // Print playlist details
    printPlaylist() {
        console.log(`Playlist: ${this.name}`);
        let current = this.head;
        while (current) {
            console.log(`${current.title} by ${current.artist}${current === this.current ? ' <-- Current' : ''}`);
            current = current.next;
        }
    }
}

// Test function to demonstrate playlist functionality
function testMusicPlaylist() {
    // Create a new playlist
    const britPopPlaylist = new Playlist("2010s British Pop");

    // Add some songs
    britPopPlaylist.addSong("Rolling in the Deep", "Adele", 228);
    britPopPlaylist.addSong("Shake It Out", "Florence + The Machine", 268);
    britPopPlaylist.addSong("Wake Me Up", "One Direction", 195);
    britPopPlaylist.addSong("Spectrum", "Florence Welch", 212);

    // Print initial playlist
    console.log("Initial Playlist:");
    britPopPlaylist.printPlaylist();

    // Demonstrate navigation
    console.log("\nNavigating through playlist:");
    console.log("Current Song:", britPopPlaylist.current.title);

    const nextSong = britPopPlaylist.next();
    console.log("Next Song:", nextSong.title);

    const previousSong = britPopPlaylist.previous();
    console.log("Back to Previous Song:", previousSong.title);

    // Remove a song
    console.log("\nRemoving 'Wake Me Up'");
    britPopPlaylist.removeSong("Wake Me Up");

    // Print current playlist
    console.log("Current Playlist:");
    britPopPlaylist.printPlaylist();

    // Potential error scenarios (commented out)
    // britPopPlaylist.removeSong("Non-existent Song");
    // britPopPlaylist.next(); // At end of playlist
    // britPopPlaylist.previous(); // At start of playlist
}

// Run the test
testMusicPlaylist();
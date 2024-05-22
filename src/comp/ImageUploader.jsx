import React, { useState } from "react";
import "../App.css";

function ImageUploader() {
  const [imageUrl, setImageUrl] = useState(null);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [bookText, setBookText] = useState([]);

  const handleImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImageUrl(URL.createObjectURL(img));
      await uploadImage(img);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenerateBook = async () => {
    if (!imageUrl || !name) {
      alert("Please upload an image and enter your name.");
      return;
    }

    setLoading(true);

    // Преобразуем URL изображения обратно в файл
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const img = new File([blob], "image.jpg", { type: blob.type });

    const uploadImage = async (img) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("face", img);
      const bookName = "Encyclopedia_girl_10_shaten"; // как указано в документации

      try {
        const response = await fetch(`/api/swap?book=${bookName}`, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Response data:", data);
          const pagesData = Object.keys(data).map(
            (key) => `data:image/jpeg;base64,${data[key]}`
          );
          setPages(pagesData);
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    const handleGenerateBook = () => {
      const originalBookText = `
    Encyclopedia of Dinosaurs (for boys)

    The beginning of the journey
    
    Have you ever dreamed of traveling to the past to see how dinosaurs lived? A boy named ${name} didn't just dream about it—he believed it was possible.
    
    One evening, sitting in the cozy living room, ${name}, along with his parents, Dad, and Mom, watched a dinosaur program through an AR projector, which made the ancient giants almost real, allowing them to literally walk through their room. The air was filled with magic as they saw in three-dimensional projection how these mighty creatures once ruled the Earth.
    Have you ever dreamed of travelling to the past to see how dinosaurs lived? A boy named ${name} didn't just dream about it—he believed it was possible.
    
    One evening, sitting in the cosy living room, ${name}, along with his parents, Dad, and Mom, watched a dinosaur program through an AR projector, which made the ancient giants almost real, allowing them to literally walk through their room. The air was filled with magic as they saw in three-dimensional projection how these mighty creatures once ruled the Earth.
    
    Suddenly, a scientist appeared on the screen, who talked about how the dinosaurs perished. ${name} was surprised and simultaneously saddened by the fate of these majestic beings. "How I wish I could see them alive!" he exclaimed when the program ended.
    
    At that moment, an ad for Astra Horizon flashed on the screen. "Embark on a journey to the age of dinosaurs with a discount!" the promise sounded. The advertisement showed happy tourists taking photos with friendly dinosaurs. ${name}'s eyes sparkled with delight, and he immediately started convincing his parents to go on this adventure.
    
    "Please, let's go! It will be the most incredible adventure of my life!" ${name} said enthusiastically. Dad and Mom exchanged glances. They saw how much their son wanted this journey and understood that such moments are priceless.
    
    "Alright," Dad  said with a smile. "Let's check our calendars and plan your trip through time."
    
    Thus began ${name}'s great adventure, which he would never forget. He was given the chance not only to see dinosaurs alive but also to touch the mysteries of the distant past.
    
    On the weekend morning, ${name}'s house was filled with the anticipation of adventure. The family went to the office of Astra Horizon, where they were warmly greeted and registered ${name} for an exciting tour into the past. The company's employees conducted a detailed briefing, explaining the safety rules and the importance of following the guides' instructions. ${name} listened attentively, his eyes gleaming with excitement and joy.
    
    After the briefing, the family was led to a hangar, where shiny capsules—the Astra Horizon research probes—were located. These metallic structures with large glass panels promised a thrilling view of ancient landscapes. At this moment,${name}'s path and his parents separated: they stayed in the office to await their son's return.
    
    With excitement, ${name} climbed into the probe, where he was helped to buckle up. Everything around seemed so unreal—from the cold metal of the capsule to the anticipated journey through time. After the countdown, the capsule came to life, and their movement into the past began.
    
    
    In the Paths of the Triassic Period
    
    When the tourist-laden probes landed, they found themselves 240 million years in the past. The staff at the base met them with another briefing and explained the tour program: starting from the Triassic period, moving through the Jurassic, and ending in the Cretaceous. This information made ${name}'s heart beat even faster. He felt a surge of exhilaration and disbelief at what was happening. Being so close to a world he had only seen through screens and books felt like a dream.
    
    Looking around, ${name} felt like an explorer of uncharted lands. The air was filled with an atmosphere of adventure and mysteries, every sound and movement around seemed an invitation to the world of ancient enigmas. He knew these experiences would be among the most vivid in his life.
    
    Before boarding the probe, each tourist was given a watch with an artificial intelligence named Roxy, who promised to be a reliable guide, historian, and friend for the entire tour. "Hello, ${name}! You have such beautiful eyes, I'm almost sure they shine brighter than my screen," Roxy's cheerful voice sounded from the watch. ${name} couldn't help but smile, listening to the compliment from the artificial intelligence.
    
    As he settled into his probe, which instantly became invisible, ${name} felt like he was part of something magical and incredible. The journey to the Triassic period had begun, and Roxy immediately got down to business, sharing fascinating facts about that time. "Did you know that the Triassic period lasted about 50 million years and was a time when it could rain for almost 2 million years straight? Can you imagine how many umbrellas you would have needed?" Roxy jokes, and ${name} laughed, imagining that scenario.
    As he settled into his probe, which instantly became invisible, ${name} felt like he was part of something magical and incredible. The journey to the Triassic period had begun, and Roxy immediately got down to business, sharing fascinating facts about that time. "Did you know that the Triassic period lasted about 50 million years and was a time when it could rain for almost 2 million years straight? Can you imagine how many umbrellas you would have needed?" Roxy joked, and ${name} laughed, imagining that scenario.
    
    "The continent at that time was called Pangaea, and it was kind of like a party for all the creatures on the planet—all in one place!" Roxy continued, adding lightness to the story of ancient times.
    
    As Roxy began to talk about the emergence of the first mammals, ammonites, and belemnites, ${name} was amazed by the diversity of life. But the real excitement came when they encountered an Eoraptor—one of the first dinosaurs.
    
    "And now meet the Eoraptor! Did you know that despite its small size, it was a very fast and agile hunter? And imagine, its size was no bigger than a modern dog! But don't underestimate it, it could win a competition with any dog in a 'who can eat a steak faster' race!" Roxy made her narration not only informative but also entertaining.
    
    Watching the Eoraptor through the probe's glass panels, ${name} felt a mix of excitement and awe. Seeing a dinosaur hunting in its natural habitat was incredibly captivating. "Roxy, how much would it weigh?" ${name} asked, trying to gauge the creature's strength.
    
    "Oh, the Eoraptor weighed about as much as three large watermelons! Or like two of my robot brothers, if they existed," Roxy replied, making ${name} laugh.
    
    The journey into the past opened a door for ${name} into a world he could only dream of, making every moment of this experience unforgettable.
    
    As their journey continued, ${name}’s probe and the other tourists slowly passed a group of Plateosaurus grazing calmly by a waterhole. Roxy, always ready to share knowledge, activated: "Did you know that Plateosaurus was one of the first dinosaurs that learned to live both on land and in water? And imagine, it could grow up to five meters long, roughly the size of a school bus. But don’t worry, it was herbivorous!"
    
    ${name} was amazed: "Roxy, could they run fast?" "Oh yes, but they probably preferred not to hurry. Imagine, they were like heavy trucks that need time to speed up," Roxy humorously replied, bringing a smile to ${name}'s face.
    
    Continuing along the river, the group saw a Liliensternus, which seemed unusually calm, unaware of the approaching Postosuchus. The hunting moment was swift and thrilling, leaving all the tourists in awe.
    
    "Postosuchus, like all predators of that time, was incredibly adapted to hunting. By the way, it was one of the most fearsome predators of its era. Their jaws were so powerful that they could easily crush bones... And did you know that it could run faster than any Olympic sprinter of our days? A true Mesozoic era running champion!" Roxy shared, making impressive comparisons.
    
    Arriving at the coast where the base camp was located, ${name} stepped onto the sandy beach, feeling the coolness of the soft sand under his feet. Looking around, he absorbed every moment of this unforgettable adventure. The surrounding nature was stunning: tall trees with unusual leaves, blooming against a bright blue sky, and distant mountains fading into the mist on the horizon.
    
    Remembering the scene with the Postosuchus, ${name} couldn’t shake off a feeling of wonder and a slight fear of nature’s power and unpredictability. This moment reminded him of how the world of dinosaurs was filled not only with beauty but also with dangers. "That was incredible, Roxy! I can't believe I saw it with my own eyes," he shared his feelings.
    
    "And there's much more to see, ${name}. The world of dinosaurs is full of surprises!" Roxy replied, promising even more impressions in the upcoming periods of their journey.
    
    
    Welcome to the Jurassic Period!
    
    As soon as ${name} and the other tourists settled into their probes, the countdown began, and a moment later, they were transported to the Jurassic Period. Before their eyes opened a completely new scene: majestic forests with tall, moss-covered trees and dense ferns that created the sensation of a mysterious garden.
    
    "Welcome to the Jurassic Period, when green was the new black!" Roxy greeted him. "Did you know that during this period the atmosphere was so rich in oxygen that insects grew to the size of modern birds? Imagine a butterfly as big as your house cats!"
    
    In front of them appeared a group of Brontosaurus, peacefully grazing among the trees. "And these giants," continued Roxy, "could easily peek into the second-floor window of your house without standing on tiptoes. And despite their huge size, their brains were the size of a nut. Who knows, maybe they just didn't want to bother with complex tasks!"
    
    Continuing on their way, ${name}'s attention was drawn to a herd of Stegosaurus engaged in mating rituals. The male Stegosauruses impressively competed with each other, clashing their massive bodies and spiked tails. "Stegosaurus, in addition to their famous plates and tail spikes, used them to regulate body temperature and, of course, for protection. During the mating season, they became real knights in armour, fighting for the attention of females," Roxy explained, adding a historical fact to the captivating spectacle.
    
    Every dinosaur ${name} saw made him reflect on the complexity and diversity of the ancient world. He felt a deep admiration and wonder, realizing how much modern humans do not know about those who inhabited the Earth long before humans appeared. These feelings intertwined with a deep respect for nature and its creations, which existed millions of years ago, and with a gentle concern about the importance of preserving and protecting modern species so they do not become part of history like their ancient predecessors.
    
    As they progressed through the lush forests of the Jurassic Period, ${name} and the other tourists continued to discover new and amazing types of dinosaurs. Suddenly, Apatosaurs appeared on their path, powerful and majestic creatures calmly grazing among the ancient trees.
    
    "Did you know that the Apatosaur, often confused with the Brontosaur, had a more robust and massive cervical vertebra? This made its neck incredibly strong, capable of bearing heavy loads while feeding on vegetation," Roxy shared, demonstrating her knowledge about this impressive creature.
    
    After sharing an enlightening fact, Roxy decided to lighten the mood for ${name}. "I hope you're enjoying everything! Now, how about I give you a riddle?" she asked teasingly. ${name} gladly agreed.
    
    "Okay, here's the riddle: Which dinosaur is the best at listening?" After a brief pause, during which ${name} pondered, Roxy winked and answered, "The 'Hear-o-saurus,' of course!" ${name} couldn't hold back his laughter, enjoying the lighthearted and joyful moment.
    
    Suddenly, as their journey continued, ${name}'s probe nearly collided with a Barosaurus that unexpectedly emerged from behind the trees. This moment made ${name}'s heart race, but skilful piloting of the probe prevented a collision.
    
    Moving on, they encountered a Diplodocus—one of the longest land animals that ever existed. "Diplodocus could reach up to 35 meters in length, almost like six elephants lined up end to end! And despite its size, it was relatively slender. That's why many scientists consider it more of a lazy creature than an athletic dinosaur," Roxy shared, providing fascinating details about the Diplodocus.
    
    At one of the Astra Horizon stop points, where ${name} and the other tourists could take a break, Roxy used the pause to share a few more interesting facts about the Jurassic period. "You know, the Jurassic period was not only a time of dinosaurs but also the dawn of the first birds. It was a time of great changes not only on land but also in the sky!" Roxy's enthusiasm was infectious, and ${name} listened with captivation.
    
    After a short rest, the group continued their journey. It wasn't long before they encountered a Kentrosaurus. "Kentrosaurus is known for its long spikes on its tail, which could reach two meters in length. They used them for protection against predators. Can you imagine, they were like real-life living fences!" Roxy joked, demonstrating her ability to make learning fun and memorable.
    
    Moving further, ${name} noticed a small and agile dinosaur—the Compsognathus. He curiously asked Roxy about it. "Compsognathus was one of the smallest dinosaurs, about the size of a modern domestic chicken. But don't think its size made it less interesting. It was very agile and could be a real formidable opponent for the insects of its time!" Roxy explained.
    
    At that moment, an Archaeopteryx flew overhead with prey in its beak. ${name} was momentarily breathless with surprise, feeling a slight anxiety. Roxy quickly reassured him, saying, "Don't worry, ${name}, our probe is completely invisible and very secure. The Archaeopteryx doesn't even know we're here!"
    
    "By the way, Archaeopteryx is considered one of the first birds. It was a real link between dinosaurs and birds. It could fly, but its flight was not as graceful as that of modern birds. It was probably more like gliding between trees," Roxy added, making the moment even more educational.
    
    ${name} felt a mix of excitement and admiration as he delved deeper into the world of ancient creatures. Each new fact and every new creature added colour to this amazing journey through time. He felt his horizons expanding, and this filled him with enthusiasm to continue exploring this mysterious ancient world.
    
    
    The Sunset of the Cretaceous Period
    
    After ${name} and the other tourists had explored the nature and dinosaurs of the Jurassic period, they returned to the Astra Horizon base. There, through a portal, they were transported to the Cretaceous period—the last epoch when dinosaurs dominated the Earth.
    
    "Welcome to the Cretaceous period!" greeted Roxy. "Did you know that during this time the climate was much warmer than it is now? It was a real paradise for dinosaurs... well, except for the asteroids, of course. And yes, during this period, the continents began to take on their modern shape, although they still liked to 'move around' more than our pensioners on the dance floor!"
    
    The nature of the Cretaceous period unfolded before ${name} in all its glory: dense forests covered in bright green vegetation, expansive plains, and shallow seas where numerous marine reptiles could dwell. The air was warm and humid, filled with the sounds of ancient life.
    
    Suddenly, their attention was drawn to a fight between two Tyrannosaurs. It was a thrilling yet frightening spectacle. The huge predators clashed with each other in a battle for territory or a mate, emitting loud roars and shaking the ground beneath them. The fight was fierce and merciless, but eventually, one of the Tyrannosaurs roared in victory while the loser retreated, leaving the scene.
    
    Unfortunately for ${name}, the sounds of the fight disrupted the probe's cloaking device, making it visible. The victorious Tyrannosaur noticed him and began to clumsily run in his direction. ${name} was seized with frightened excitement, and he hurriedly asked Roxy what to do.
    
    "Quick, press this button!" Roxy directed him, pointing to a special mechanism in the probe. As soon as ${name} pressed the button, the probe emitted a sound that repels dinosaurs. The Tyrannosaur, puzzled and annoyed by the sound, stopped, turned around, and quickly retreated in the opposite direction.
    
    Breathing a sigh of relief, ${name} thanked Roxy for her help. "You're welcome! Always glad to help. By the way, your case has already been reported to the rescue service," Roxy affirmed. Soon a rescue team arrived from the base, repaired the probe, and apologized for the incident.
    
    "Good job, ${name}, you handled that bravely!" Roxy praised him, then continued to share fascinating facts about the Tyrannosaurus: "Did you know that it also had an incredibly sharp sense of smell—able to detect prey several kilometres away? And despite its small arms, it was one of the most dangerous predators of its time!"
    
    Feeling relieved and continuing to listen to Roxy, ${name} smiled, experiencing deep satisfaction from being able to get so close to the ancient inhabitants of Earth, and at the same time, he felt gratitude for modern technologies that allowed him to experience this in complete safety.
    
    Continuing their journey after the encounter with the Tyrannosaurus, ${name} and the other tourists saw a group of Triceratops. Suddenly, one of the Triceratops, trying to scratch its back against a large rock, began to roll on the ground so amusingly that it seemed like it was performing some ancient dance. This sight made ${name} laugh heartily.
    
    "Did you know," Roxy began, joining in the laughter, "that Triceratops used their huge horns not only for protection from predators but also for... fashion shows? At least they would have if dinosaurs had their own social network. 'Check out my new accessories!' a Triceratops would say, posting a selfie."
    
    Along the way, they spotted Velociraptors lying in ambush. "Velociraptors were smart and agile hunters. And you know what's interesting? They were actually covered in feathers, like birds. So, if they participated in a costume contest, they would definitely take first place for the most stylish 'dino-cloak'!" Roxy joked.
    
    ${name} responded cheerfully: "So, Velociraptors were the first fashionistas of the Mesozoic era? I can imagine them on the runway!"
    
    Arriving at the coast, they saw a newly hatched Spinosaurus baby standing next to its nest. Around were signs of other dinosaurs trying to steal the eggs. "Egg theft was not uncommon and significantly affected the population of some species. But Spinosaurus mothers are very caring and try to protect their offspring. It was a real 'dinosaur daycare'!" Roxy explained.
    
    Next, upon meeting an Ankylosaurus, Roxy shared another amazing fact:
    "Ankylosaurs were real tanks among dinosaurs. Their bodies were covered in armour, and they had powerful bony clubs on their tails. The climate at the time influenced whether a male or female would hatch from the eggs. Warmer conditions tipped the scales in favour of one sex, which undoubtedly affected the demographics. So, you could say the weather decided who would 'lead the parade' in the dinosaur world."
    
    ${name} was amazed by the information and couldn't stop marveling at how complex and diverse the ancient world was.
    
    At the next stop at one of the Astra Horizon bases, ${name} and his group of tourists paused to grab a bite to eat. The base was built in a style reminiscent of modern research stations but with additional elements to protect against dinosaurs. Large glass panels offered a panoramic view of the surrounding Cretaceous landscape, while the interior space of the base was filled with soft light and modern technology, making the stop cosy and safe.
    
    While eating, ${name} reflected on what he had seen. Roxy used this moment to share additional facts about the Cretaceous period. "You know, ${name}, many believe that a meteorite was the sole cause of the dinosaurs' extinction, but it was more likely a combination of factors, including climate changes and volcanic activity. Plus, evolution didn’t stop at dinosaurs; many of them eventually evolved into modern birds!"
    
    After refueling, they continued on their way and soon saw a Pteranodon soaring in the sky. Roxy shared a fun fact: "Pteranodons weren't dinosaurs, but flying reptiles. And you know, they didn't have feathers, but they could fold their wings like an umbrella. Imagine how they would get tangled up in strong winds!"
    
    ${name} posed an interesting question: "If Pteranodons were alive today, could they learn to avoid aeroplanes?" Roxy paused for a moment before answering: "That would be an amazing sight, but given their size and manoeuvrability, I think they would quickly adapt to our world!"
    
    Continuing their journey, the group saw a Carcharodontosaurus in the midst of hunting. "Let's shorten its name to 'Carchi' to make it easier to say," suggested Roxy. "Carchi, like its full name, means 'shark-toothed lizard,' which gives us an idea of its sharp teeth capable of slicing through even the toughest prey!"
    
    Their attention was interrupted by a Parasaurolophus's call. "What would a Parasaurolophus say if it could talk?" ${name} jokingly asked. "It would definitely ask to turn up the volume of the music!" Roxy quipped. "Their loud calls could serve as alarm signals and ways to communicate over long distances, like an ancient dinosaur 'telephone'!"
    
    As the group continued their path, they suddenly encountered a massive Argentinosaurus, one of the largest land animals ever to exist. It nearly knocked them over as it passed by their probe with its powerful strides. ${name} held his breath for a moment from excitement and slight fear.
    
    "Argentinosaurus were true giants of the Mesozoic era. They could reach lengths of up to 35 meters and weigh up to 100 tons, making them one of the largest dinosaurs to ever walk the Earth," Roxy explained, adding, "And imagine, despite their size, they were herbivores and primarily fed on plants. You could say they were the ancient excavators!"
    
    ${name} was astounded by the size of the Argentinosaurus, his eyes widened in amazement, and he watched in awe as it slowly moved across the plain.
    
    Shortly after that, a Stegocephalus ran by, bringing a smile to everyone in the group. Roxy cheerfully noted, "Stegocephalians, although they look serious, could actually be quite playful. Imagine them organizing ancient versions of 'slippery races,' tripping over their own feet!"
    
    Later, as the group continued their journey, they encountered a Titanosaur, an impressive dinosaur that inspired awe and respect. Astonished by its size, ${name}
    asked Roxy, "Are they really that huge?"
    
    Roxy replied, "Titanosaurs could reach lengths of over 30 meters, and like the Argentinosaurus, they were among the largest creatures to ever walk the Earth. An interesting fact about them—their eggs were the size of a basketball, which seems huge, but considering the size of the dinosaurs themselves, it's quite small!"
    
    After an exciting day full of discoveries and adventures, ${name} and the other tourists arrived at the final base of their tour. It was the last stop before returning to the modern world. Before taking off her watch, Roxy added one last fun fact: "You know, if dinosaurs had used social media, their least favorite emoji would probably have been the asteroid!" This joke made ${name} laugh, though he felt a tinge of sadness at parting with Roxy.
    
    "Thank you, Roxy, for all these stories and adventures. It was fun and very interesting!" ${name} thanked her, bidding farewell to artificial intelligence. He took off the watch, sat in his probe, and soon they all returned to their own time.
    
    Upon arrival back, the Astra Horizon staff greeted the tourists, helping them out of the probes and inquiring if they enjoyed the journey. ${name}, upon seeing his parents, rushed into their arms. "Thank you for this trip! It was incredible!" he exclaimed, embracing them.
    
    On the way home in the car, ${name} recounted every moment of his journey, not missing a single detail about what he saw and heard from Roxy. He described every dinosaur, every landscape, and every funny moment as if reliving all the adventures anew.
    
    When they arrived home, a message from Astra Horizon was waiting in the family's inbox. Dad opened it, and a three-dimensional message emerged from the tablet, asking for a review of the tour. ${name} happily wrote his review, sharing his impressions and gratitude. As soon as the review was sent, a new message appeared:
    
    "Thank you for your review! If you enjoyed travelling to the past, perhaps you'd like to embark on a journey to the stars... our new space tour is now available!"
    
        `;

      const bookPages = splitTextIntoPages(originalBookText, 9);
      setBookText(bookPages);
    };

    const splitTextIntoPages = (text, numPages) => {
      const words = text.split(" ");
      const wordsPerPage = Math.ceil(words.length / numPages);
      const pages = [];

      for (let i = 0; i < numPages; i++) {
        pages.push(
          words.slice(i * wordsPerPage, (i + 1) * wordsPerPage).join(" ")
        );
      }

      return pages;
    };

    const renderBook = () => {
      const bookSpreads = [];
      for (let i = 0; i < bookText.length; i += 2) {
        bookSpreads.push(
          <div key={i} className="book-container">
            <section className="open-book">
              <div className="book-spread">
                <div className="book-page">
                  <div className="page-content">
                    <p>{bookText[i]}</p>
                  </div>
                  <div className="page-number">{i + 1}</div>
                </div>
                {i + 1 < bookText.length && (
                  <div className="book-page">
                    <div className="page-content">
                      <p>{bookText[i + 1]}</p>
                    </div>
                    <div className="page-number">{i + 2}</div>
                  </div>
                )}
              </div>
            </section>
          </div>
        );
      }
      return bookSpreads;
    };

    return (
      <div className="containerr">
        <input
          type="file"
          className="input-file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="input-name"
        />
        <button onClick={handleGenerateBook} className="generate-button">
          Generate Book
        </button>
        {loading && <p>Loading...</p>}
        {pages.length > 0 ? (
          <div className="book-container">
            {pages.map((page, index) => (
              <div
                key={index}
                className={`book-page ${index === 0 ? "cover-page" : ""}`}
              >
                <img src={page} alt={`Page ${index + 1}`} />
              </div>
            ))}
          </div>
        ) : (
          imageUrl &&
          !loading && (
            <div className="image-preview">
              <div
                className="image-half"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
              <div
                className="image-half image-shadow"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            </div>
          )
        )}
        {bookText.length > 0 && renderBook()}
      </div>
    );
  };
}
export default ImageUploader;

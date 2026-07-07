export interface TigerMeta {
	code: string;
	firstSeen: string;
	gender: "Male" | "Female";
	identificationSign: string;
	age: string;
	zone: string;
	status: string;
}

export interface TigerStorySection {
	heading: string;
	body: string | readonly string[];
}

export interface TigerProfile {
	slug: string;
	name: string;
	tagline: string;
	excerpt: string;
	image: string;
	imageAlt: string;
	meta: TigerMeta;
	sections: TigerStorySection[];
}

export const TIGERS: TigerProfile[] = [
	{
		slug: "siddhi",
		name: "Siddhi",
		tagline: "T-125 — Clever Tigress of Ranthambore",
		excerpt:
			"When you see her, you feel her power — calm, dangerous, and fiercely tactical in territorial battles.",
		image: "/Home/11.jpg",
		imageAlt: "Tigress Siddhi in Ranthambore National Park",
		meta: {
			code: "T-125",
			firstSeen: "–",
			gender: "Female",
			identificationSign: "–",
			age: "2+ years",
			zone: "3 & 4",
			status: "Live",
		},
		sections: [
			{
				heading: "Machali's Legacy",
				body: "The legendary Tigress of Ranthambore National Park Machali shows that her gene pool is the fiercest one in the Tiger clans of Ranthambore. Riddhi, one of the great granddaughters of Machali, is extremely popular for her dauntless spirit and adventurous nature — and Siddhi, the other one, is quiet but dangerous and will show you her power by fighting fiercely alongside Riddhi. She is not much into the limelight like her sister Riddhi, but her boldness was revealed when she was seen fighting with her mother Tigress Arrowhead for the dominance of the territory.",
			},
			{
				heading: "Sisters Over Territory — The Great Battle",
				body: [
					"The stories of the dangerous tussle between the two sister Tigresses Riddhi and Siddhi has been attracting wildlife lovers for years. These two have been indulging in a fight for quite a long time over the dominance of the territory. The territory in zone 3 and 4 for which they are fighting is the most beautiful and one of the best tiger habitats of Ranthambore.",
					"Siddhi is equally bold and brave like Riddhi when it comes to conquering anything. Tourists were spellbound to see her courage when she was seen fighting at a water body in zone 4. It was her great fighting skills that caused 14 stitches on Riddhi's tongue and several bruises on her shoulders. Riddhi has been very upfront in showing her bravery and she is always ready to fight whenever she gets a chance, but Siddhi on the other hand waits and fights tactfully.",
					"Riddhi is rumored to have killed a tiger cub T-120 and the intense fights with her sister Siddhi has made things not in her favor. She will be shifted to Sariska Tiger Reserve due to lack of space — as a result Tigress Siddhi will lead her territory. Tigress Siddhi will get the title of the Queen who will get the best Tiger Habitat of Ranthambore.",
				],
			},
		],
	},
	{
		slug: "riddhi",
		name: "Riddhi",
		tagline: "T-124 — The Notorious Queen of Ranthambore",
		excerpt:
			"Wherever she travels, it becomes the path itself — a fearless great-granddaughter of Machali.",
		image: "/gallery/14.jpg",
		imageAlt: "Tigress Riddhi in Ranthambore National Park",
		meta: {
			code: "T-124",
			firstSeen: "–",
			gender: "Female",
			identificationSign: "–",
			age: "2+ years",
			zone: "3 & 4",
			status: "Live",
		},
		sections: [
			{
				heading: "A Rising Star of the Jungle",
				body: "In the world of tigers, the fifth generation of the legendary Tigress Machali (The Lady of the Lake) is the center of attraction nowadays in the wilderness of Ranthambore and among wildlife lovers. Yes, the great granddaughter of Machali — Riddhi aka T-124 — is the talk of the jungle for her fearless and adventurous spirit.",
			},
			{
				heading: "Story of Dauntless Bravery and Fight for Dominance",
				body: [
					"Possessing an adventurous spirit since childhood, Tigress Riddhi had the sheer audacity to clash with her mother Tigress Arrowhead over territory. She is no less than her great grandmother Machali in boldness. Tigress Arrowhead gave birth to two tiger cubs named Riddhi and Siddhi. They remained with their mother for some time but this mother-daughter happy family scene was short-lived. Both of them possess immense courage but Riddhi's power and her adventurous spirit is one of a kind. She made her territory in her mother's territory. She wanders like a queen and can toss you with her bold looks at Padam Lake, Raj-Bag, Malik Lake and Mandoob area from zone no. 3 and 4.",
					"This territory is the heart of Ranthambore where Machali ruled for years followed by her daughter Sundari and then her daughter Krishna and her daughter Arrowhead continued the legacy of dominance. Surrounded by mesmerizing waterfalls and ponds, this area is the best Tiger habitat area where now Riddhi, the daughter of Arrowhead, rules the hearts of wildlife lovers.",
					"Riddhi has captivated the hearts of forest officials, guides, wildlife lovers and drivers. The entire wilderness resounds in the bold calls of Riddhi and the stories of her notoriety.",
				],
			},
			{
				heading: "Sister's Fierce Fight — Unique in the History of Wildlife",
				body: "The fierce tussle between Riddhi and her sister Siddhi for dominance over the territory is a very interesting one. The fierce struggle between the two sisters has been the point of interest for tourists who visit Ranthambore to see these wild tigresses. Tourists sometimes have seen them fighting and captured them on camera. Their fighting is so intense that sometimes Riddhi gets severely injured with bruises on shoulders and a cut on her tongue. The most interesting fact is that the tigress Riddhi has got 14 stitches on its tongue. In the past few months more than five fights have been recorded over the dominance of the territory.",
			},
			{
				heading: "Rumors and Transfer to Sariska National Park",
				body: "The fierce tigress Riddhi is said to have killed a tiger cub T-120 in the Tamba Khan Area of Ranthambore National Park as some forest officials have seen her chasing down T-102. Due to these incidents and the conflict of Riddhi and Siddhi over the territory, the tigress Riddhi will be shifted to Sariska Tiger Reserve. The cat population is rising at Ranthambore Tiger Reserve due to which there is a lack of space and a fear of territorial fights. To reduce this pressure Riddhi will be moved out of Ranthambore for her new journey.",
			},
		],
	},
	{
		slug: "mt-2",
		name: "T-106 (MT-2)",
		tagline: "The Tigress Who Won Hearts, and Lovers",
		excerpt:
			"The journey of Tigress MT-2, from Ranthambore to Mukundra Hills Tiger Reserve.",
		image: "/Home/t1.webp",
		imageAlt: "Tigress MT-2 in Ranthambore National Park",
		meta: {
			code: "T-106 (aka MT-2)",
			firstSeen: "–",
			gender: "Female",
			identificationSign: "–",
			age: "4 years",
			zone: "Shifted to Mukundra Tiger Reserve",
			status: "Dead",
		},
		sections: [
			{
				heading: "A Tigress of Romance and Resilience",
				body: "Those who are fascinated by tales of tigers revolving around bravery, chivalry and romance will be quite familiar with the tigress MT-2. After all, this is the same tigress for whom T-98 aka MT-3 walked 150 kilometers across three districts. However, that their coming together wasn't meant to be is quite another story. The tigress, who is now dead, will also be remembered for being the first tigress who littered two cubs after being shifted to Mukundra Hills Tiger Reserve from Ranthambore National Park.",
			},
			{
				heading: "Tigress MT-2 Shifted to Mukundra from Ranthambore",
				body: "Tigress MT-2 was the daughter of tigress T-39 (Noor) and sister of tigress T-107 (Sultana). Tigress T-106 was shifted from Ranthambore National Park to Mukundra Hills Tiger Reserve (MHTR) in 2018, where she was renamed MT-2. What made the event special was the fact that the tigress gave birth to two cubs soon after being transferred to her new habitat. The cubs were first spotted by DFO T Mohan Raj while patrolling in the Darrah range of the tiger reserve. The event was celebrated as a successful example of a third tiger reintroduction program in India.",
			},
			{
				heading: "A Love Story with a Sad Ending",
				body: [
					"Tigress MT-2 first inhabited Ranthambore National Park, sharing the same area with T-98, or MT-3. After a while, the tigress, along with one other tiger, MT-1, was relocated to Mukundra Hills Tiger Reserve, leaving the tiger T-98 quite irritated, fierce and hostile.",
					"It wasn't long before T-98 undertook a journey of epic proportions to get back together with MT-2, the tigress whom he loved. He undertook a journey of 150 kilometers, crossing three districts and a river named Kali Sindh. Everybody was surprised, since it was the first time somebody had heard or seen something like this.",
					"Unfortunately, it was a little too late when T-98 reached his mate. MT-2 had by then mated with MT-1, and produced two cubs. T-98 was helpless and could do nothing about it, but this is a story that will be told among wildlife lovers for a long time to come.",
				],
			},
			{
				heading: "Tigress MT-2 Found Dead",
				body: "The death of Tigress MT-2, which occurred just a few days after T-98, has left everyone shocked, perplexed and angry. The Rajasthan Forest Department found the body of the dead tigress in a decomposed state in the Mukundra Hills Tiger Reserve. According to the autopsy, the tigress died due to a territorial fight, as it had multiple wounds on its body. The deaths of two tigers in such a small span of time has raised questions on the lackadaisical approach of the forest department in the Mukundra Hills Tiger Reserve.",
			},
		],
	},
	{
		slug: "t-98",
		name: "T-98",
		tagline: "The Adventurous Tiger of Ranthambore",
		excerpt:
			"The famous tiger of Ranthambore who once walked 150 miles to meet his mate.",
		image: "/Home/t2.jpg",
		imageAlt: "Tiger T-98 in Ranthambore National Park",
		meta: {
			code: "T-98 / MT-3",
			firstSeen: "March 2016",
			gender: "Male",
			identificationSign: "–",
			age: "4 years",
			zone: "Shifted to Mukundra Tiger Reserve",
			status: "Dead",
		},
		sections: [
			{
				heading: "A Tiger of Romance and Adventure",
				body: "The famous tiger T-98, also known as MT-3, will always be remembered for his romance and adventurous spirit. It was his longing for his lover that led him to travel 150 kilometers across three districts, an extraordinary feat never heard of before. He also possessed a fierce side, which was revealed when, estranged from his beloved one, he allegedly attacked a woman, Nauranti Devi, then 62 years of age, who had gone to the forest to collect firewood.",
			},
			{
				heading: "The Journey from Ranthambore to Mukundra",
				body: [
					"The tiger, known as T-98 in Ranthambore and MT-3 in Mukundra Tiger Reserve, was born to the tigress T-60 and tiger T-57, along with 2 siblings. The first time he was seen was in March 2016.",
					"T-98 possessed a free and adventurous spirit from his early teenage years. It wasn't long before he fell in love with the tigress MT-2, as both of them inhabited the same area in Ranthambore National Park. Tiger lovers and wildlife spotters frequently noticed the strong bond of affection between the two felines.",
					"However, as luck would have it, MT-2, along with one other tiger, was relocated from Ranthambore National Park to Mukundra Tiger Reserve. After her departure, T-98 had grown quite aggressive. Unable to bear the separation of his lover, T-98 set off on a long and arduous journey spanning 150 kilometers. He crossed three districts and the River Kali Sindh, eager to rejoin his mate.",
					"After his arrival at Mukundra, T-98 was renamed MT-3. MT-2, the tigress for whom he had undertaken a long journey, had already paired with MT-1 when he was relocated to Mukundra, first mating and then producing cubs. His epic journey, although daredevilish, had left him brokenhearted.",
				],
			},
			{
				heading: "T-98 Passes Away",
				body: "T-98 was 4 years old at the time of his death in Mukundra Hills Tiger Reserve (MHTR) in Kota, Rajasthan. His body was found in close proximity to the water point in Mashalpura forest area. A few days before his death, the tiger was seen limping. The postmortem revealed that he was suffering from Bovine Tuberculosis, cardio shock and lung infection. According to the forest department, T-98 had turned anaemic, with large amounts of fat deposited in his body, leading to the blockage of heart chambers along with severe lung infection.",
			},
		],
	},
	{
		slug: "bina-two",
		name: "Bina Two",
		tagline: "The Famous Tigress Raised by Dollar",
		excerpt:
			"The short story of Bina Two, brought up by the famous Tiger Dollar and famous for her rebellious attitude.",
		image: "/Home/tiger.jpg",
		imageAlt: "Tigress Bina Two in Ranthambore National Park",
		meta: {
			code: "–",
			firstSeen: "2011",
			gender: "Female",
			identificationSign: "–",
			age: "7 years",
			zone: "Shifted to Sariska",
			status: "Alive",
		},
		sections: [
			{
				heading: "Raised by Their Father Dollar",
				body: "Bina Two (Do) is one of the tigresses among the twin sisters found in Ranthambore who were famous for being raised by their proud father, Dollar. Tigress Bina Do, the sister tigress of Bina Ek, both were littered by Kachida Female (T-5) and Dollar (T-25) in November 2010, and had been the pride of Ranthambore since then.",
			},
			{
				heading: "The Story of Bina Do and Her Family",
				body: [
					"This story is the real story of a family that loves each other and understands the value of each other, and the whole credit goes to the Tiger T-25 aka Dollar, who was a responsible father and taught his cubs the necessary skills for survival.",
					"The forest officials earlier thought that Dollar would bring harm to his cubs like any other male tiger; but interestingly, they were in for a pleasant surprise when he began taking care of them. Like obedient children, both the cubs would follow him and his instructions; but while Bina Ek would follow Dollar like a shadow, Bina Do demonstrated her unwillingness to accept his authority, as if she wanted her own territory at an earlier stage itself.",
				],
			},
			{
				heading: "Bina Two Shifted to Sariska Tiger Reserve",
				body: "Keeping in mind the increasing population of tigers in the Ranthambore National Park area, the forest department officials relocated both Bina-I and Bina-II to the Sariska Tiger Reserve (STR) in January 2013, in a bid to save tigers and to avoid man-animal conflicts.",
			},
		],
	},
	{
		slug: "bina-one",
		name: "Bina One",
		tagline: "The Famous Tigress of Ranthambore",
		excerpt:
			"The captivating story of Bina One (Ek) and her sister, Bina Two (Do).",
		image: "/Home/11.jpg",
		imageAlt: "Tigress Bina One in Ranthambore National Park",
		meta: {
			code: "–",
			firstSeen: "2011",
			gender: "Female",
			identificationSign: "–",
			age: "7 years",
			zone: "Shifted to Sariska",
			status: "Alive",
		},
		sections: [
			{
				heading: "A Tigress in the Limelight",
				body: "The Tigress Bina One, along with her sister, Bina Two, has always remained in the limelight of Ranthambore news. The reason for such fame is their early orphanage, and later their bringing up by their father, Dollar, the T-25 tiger. This extraordinary pair received a lot of attention by the tourists in response to their bringing up by Dollar, a male tiger, also known as Zalim because of his cruel nature. Dollar proved himself to be the best mother in Ranthambore until his death in January 2020 because of a territorial fight.",
			},
			{
				heading: "The Famous Adoption Story",
				body: [
					"Being born to the Kachida Female (T-5) and Dollar (T-25) in November 2010, the Bina Ek tigress, along with her sister, has a famous adoption story that really shook the research world, and especially the tiger lovers.",
					"About four months after their birth, in February 2011, the Kachida Female was found dead near the chowki (guard post). This was the time when the forest officials were in an inevitable dilemma whether the cubs will survive or die along with their mother. But surprisingly, they found out that Dollar, their father, was taking care of the cubs.",
					"Unlike his howling nature, Dollar was observed numerous times patrolling his territory and training his cubs for the necessary skills for survival, and occasionally admonishing them like any good mother. Bina Ek, being quite responsive to her father, always stayed around him in her previous stage, followed him like a shadow, played with him and even slept near him.",
				],
			},
			{
				heading: "Bina Ek Transferred to Sariska",
				body: "In November 2012, the forest department decided to relocate the duo sisters to the Sariska Reserve to re-establish the population of Sariska. The orders were issued for the relocation of these two newly-matured tigresses to Sariska to continue to populate this recently poached out park, just 100 miles from Ranthambore. Sariska is now peppier with the introduction of these duo sisters.",
			},
		],
	},
	{
		slug: "junglee",
		name: "Junglee",
		tagline: "T-41 — Ranthambore Tigress",
		excerpt:
			"T-41 aka Junglee, determined in her survival and an eye catcher by both guides and travellers.",
		image: "/gallery/7.jpg",
		imageAlt: "Tigress Junglee in Ranthambore National Park",
		meta: {
			code: "T-41",
			firstSeen: "Oct 1997",
			gender: "Female",
			identificationSign: "–",
			age: "19",
			zone: "Zone 4, 5 and Ranthambhore Rd.",
			status: "Dead",
		},
		sections: [
			{
				heading: "Born in Berda Valley",
				body: "Tigress T-41, also known as Junglee, was born to T-4 (female) and Big Daddy in the beautiful Berda Valley of Ranthambore. She, along with her brother Berda (T-40), was extremely popular among the regular guides and travelers. Unfortunately, when the cubs were a year old, their mother died of an infected injury following a fight over prey with another tiger in the area.",
			},
			{
				heading: "Determination and Survival",
				body: [
					"After this incident, both the cubs survived for another one year by consoling and supporting each other in hunting and learning the basic survival skills. Junglee became famous in her vicinity due to her rigid determination of survival and established herself in her place of birth, as a member of the ruling elite along with her brother T-40. Her ruling territories were Berda, Semli, Bhakola valley and the Adidant regions of Ranthambore National Park.",
					"During later years, it was observed that a dominant male tiger, Semli (T-6), started tussling with the duo siblings for their home territory. The tussle ended with the escape of the brother of T-41, as he was driven out of the area and Junglee had to survive with Semli Male, by making peace with him and regularly mating with him.",
				],
			},
			{
				heading: "Motherhood",
				body: "Their courtship resulted in the birth of their first brood of tiny cubs in November 2012. Junglee indulged in treating her cubs — snatching a quick meal and quenching her thirst in between, feeding her ravenous cubs that are still blind for the first ten to fourteen days. The Semli Male, who is a dominant one in the Berda area, was also often observed overseeing and over-indulging with his tigress Junglee on some food nearby.",
			},
		],
	},
	{
		slug: "mala",
		name: "Mala",
		tagline: "T-39 — The Beauty of Ranthambore",
		excerpt:
			"T-39 aka Mala, the beauty of Ranthambore — the tigress everybody fell in love with.",
		image: "/Home/t1.webp",
		imageAlt: "Tigress Mala in Ranthambore National Park",
		meta: {
			code: "T-39",
			firstSeen: "2009",
			gender: "Female",
			identificationSign: "Diamond symbol on her body",
			age: "14 years",
			zone: "Zone 1, 2, 6",
			status: "Alive",
		},
		sections: [
			{
				heading: "Noor, Mala or Sultanpur",
				body: "Call her Noor, Mala or Sultanpur, the female celebrity tiger T-39 has captivated the attention of a lot of visitors to Ranthambore. This amazing tigress is famous for her beauty and wavy pattern on her body. The name Mala, which means necklace in Hindi, was given to her because of the decorative bead-like stripes on her side flanks. The name Noor, which means glow, was given to her as her wavy patterns brought a sparkle-like attraction to the visitors.",
			},
			{
				heading: "The Tigress Everyone Fell in Love With",
				body: [
					"Mala, who descends from the sister of the great matriarch Machali, grew up in Guda/Sultanpur, the southernmost part of the park. She became extremely popular among the visitors since she was a cub.",
					"After separating from her mother T-13 at the age of two, her mother littered two cubs with T-12. After that, T-12, the male tiger, was very soon relocated to Sariska during the year 2010. As a result, the territory left behind by T-12 was overtaken by the Sultanpur Male (T-24).",
					"Impressively, one of Mala's brothers, T-38, covered the dangerous journey of over 100 miles by crossing the grand Chambal River and was caught around the area of Kuno Palpur Sanctuary in MP.",
				],
			},
			{
				heading: "Common Identifications of Mala (T-39)",
				body: [
					"Similar in appearance with T-17 without collar",
					"Beaded necklace-like strips on her body",
					"Broken left ear",
					"Inverted trishul-like mark above the right eye",
					"Two prominent Y formations on right hind leg",
				],
			},
		],
	},
	{
		slug: "jhumroo",
		name: "Jhumroo",
		tagline: "T-20 — Lord of the Lakes",
		excerpt:
			"The oldest male in the park, descended from the dynasty of the great Machali.",
		image: "/Home/machli.jpg",
		imageAlt: "Tiger Jhumroo in Ranthambore National Park",
		meta: {
			code: "T-20",
			firstSeen: "2002 Padam Lake",
			gender: "Male",
			identificationSign: "Big Face",
			age: "17 years",
			zone: "–",
			status: "Dead",
		},
		sections: [
			{
				heading: "Lord of the Lakes",
				body: [
					"Ranthambore, the tigers' paradise, attracts tiger lovers to catch the glory of the most popular, the masculine Jhumroo. T-20 (Jhumroo) was the oldest male in the park, descended from the dynasty of the great Machali, being her son.",
					"If Machali is the Lady of the Lakes then probably Jhumroo is called the Lord of the Lakes, since after Machali, it was Jhumroo who reigned her territorial areas including the lake and other water body areas.",
				],
			},
			{
				heading: "A Majestic Predator",
				body: [
					"From a strapping young cub to gigantic male, the journey of Jhumroo in the Ranthambore vicinity is simply incredible. The 9 feet long male tiger ruled the jungle by dominating the area around Padam Talao and Malik Talao, while the entire summer was spent in the cool confines of Rani Bagh.",
					"Jhumroo left behind at least 18 offspring with four known tigresses. This majestic predator was first observed by the tourists during July 2002, described by the officials as an extremely shy creature since he could rarely be spotted.",
					"Unfortunately, Jhumroo passed away in 2012, with his carcass recovered in the Gilai Saga-Khadar Area of Ranthambore National Park in Sawai Madhopur district.",
				],
			},
		],
	},
	{
		slug: "t-19",
		name: "T-19",
		tagline: "The Tigress Who Expanded Her Territory",
		excerpt:
			"Born to the famous Machali tigress, T-19 rules over a large territory in Ranthambore.",
		image: "/gallery/10.jpg",
		imageAlt: "Tigress T-19 in Ranthambore National Park",
		meta: {
			code: "T-19",
			firstSeen: "October 2006",
			gender: "Female",
			identificationSign: "–",
			age: "14 years",
			zone: "Zone 3 & Zone 4",
			status: "Alive",
		},
		sections: [
			{
				heading: "The Jhalra Female",
				body: "Born to the famous Machali tigress, the T-19 tigress is also known as the Jhalra Female, the classification given to this big cat as per her territory where she used to spend her days during her heyday. Along with Satara (T-17) and Athara (T-18), T-19 was born during the monsoon months of 2006. They were the three female cubs of Machali.",
			},
			{
				heading: "T-19 Expands Her Territory",
				body: [
					"T-17 left her lineage in search of her own territory at a very early stage, but T-19 and T-18 remained with their mother for quite a long time, till the end of summers 2008. T-17 was firmly established around the lakes which she overtook from Machali. While T-18 established a territory in the Nalghati – Phoota Banda – Phoota Kot area, T-19 had no choice but to take over the leftovers of Machali's territory — the Mandoob plateau.",
					"Unlike T-17 and T-18, T-19 had always been the shyest tigress in Ranthambore, and her observances between 2008 and 2011 were very few, with greater gaps. Soon, when T-18 was relocated to Sariska, T-19 took over her territory.",
				],
			},
			{
				heading: "T-19 Gives Birth to 3 Cubs",
				body: "She had been observed mating with T-28 (Star Male) during the end of 2010 and the beginning of 2011. Soon after, she was observed with three cubs — two males and one female — and on the verge of expanding her territory, she moved towards the Lahpur Valley with her cubs. By the end of 2011, she expanded herself with the largest sized territory. Today, T-19 is the proud owner of a large territory and the typical heir of the whole territory of the leftovers of Machali.",
			},
		],
	},
	{
		slug: "ustad",
		name: "Ustad",
		tagline: "T-24 — The Fearless Tiger of Ranthambore",
		excerpt:
			"Ustad, the fearless tiger who won hearts with his flamboyance and fearlessness.",
		image: "/Home/t2.jpg",
		imageAlt: "Tiger Ustad in Ranthambore National Park",
		meta: {
			code: "T-24",
			firstSeen: "2005",
			gender: "Male",
			identificationSign: "–",
			age: "15 years",
			zone: "Zone 1, Zone 2, Zone 6",
			status: "Live in Zoo Sajjangarh",
		},
		sections: [
			{
				heading: "The Rising Star of Ranthambore",
				body: "Born in 2005 to the tiger named T-20 (Jhumroo) and tigress T-22 (Gayatri), T-24 (Ustad) is a mighty and attractive male tiger who ruled the Ranthambore Tiger Reserve for 9 years. He lived a happy life with his partner T-39 (Noor), and thundered about in his zone without any major competition from other male tigers. Once a rising star of the Ranthambore Reserve, T-24 was named as Ustad by the locals owing to his free spirit.",
			},
			{
				heading: "What Brought Ustad into the Limelight?",
				body: [
					"Majestic and intrepid, Ustad came into the limelight when he killed a veteran forest guard, Rampal Saini, on May 8, 2015. This was not the first reported attack of Ustad; he had earlier also been charged of killing two villagers in July 2010 and March 2012 respectively, and another forest guard in October 2012.",
					"Tigers are usually shy of humans and avoid confrontation with them unless harmed but the case of T-24 was a bit different. As per the villagers residing in the vicinity of the Tiger Reserve, Ustad had grown violent and aggressive over the past few years.",
				],
			},
			{
				heading: "Relocation to Sajjangarh Biological Park",
				body: [
					"Facing the protests from villagers and other forest guards patrolling the territory of T-24, Ustad was moved to Sajjangarh Biological Park in Udaipur on May 16, 2015. Located at a distance of 400 km from the Ranthambore Tiger Reserve and away from human settlements, at the biological park, Ustad was confined to a natural enclosure spread over an area of less than a hectare.",
					"With his unmatched appeal and swagger, Ustad had undoubtedly raised a huge fan following for himself. Candle marches and rallies in support of T-24 spread his story in international media. International broadcast networks like BBC and Al Jazeera covered his entire story which brought global fame to Ustad.",
				],
			},
			{
				heading: "What's the Latest on Ustad?",
				body: "The Jaipur High Court, on 28th May 2015, came to the final decision that the removal of Tiger T-24 to Sajjangarh Zoo in Udaipur was legal. Activists, however, continue to fight the case legally. He continues to stay in Sajjangarh Zoo in Udaipur for now.",
			},
		],
	},
	{
		slug: "sundari",
		name: "Sundari",
		tagline: "T-17 — Famous Tigress of Ranthambore",
		excerpt:
			"Sundari, a tigress with a fierce spirit who was both independent and mysterious.",
		image: "/gallery/6.jpg",
		imageAlt: "Tigress Sundari in Ranthambore National Park",
		meta: {
			code: "T-17",
			firstSeen: "October 2006",
			gender: "Female",
			identificationSign: "Her face is very beautiful",
			age: "5 years",
			zone: "Zone 1 to Zone 5",
			status: "Dead",
		},
		sections: [
			{
				heading: "Daughter of Machali",
				body: "Sundari, the tigress, also known as T-17, was the daughter of Machali, a legend in her own right and once the star attraction of Ranthambore. Among the three cubs whom Machali gave birth to, Sundari was always the most dominant one. Just a year after her birth in 2006, Sundari decided to explore her independent territory, unlike two of her sisters who decided to stay on with their mother.",
			},
			{
				heading: "Fierce Spirit and Territory",
				body: [
					"It was only in 2008 that Sundari managed to find for herself a clearly demarcated territory, located at the bottom of a fort. In the summer of that year, she grew to become a fully independent tigress. Her fierce spirit and desire to expand her territory caused her to come in conflict with her mother. After a couple of duels, she won the territory located in close proximity to the lakes, for herself.",
					"A collar was placed on Sundari's neck in 2008 to track her movements. However, on 24th November 2011, the collar was removed from her neck and she was released from captivity.",
				],
			},
			{
				heading: "Sundari's Tales of Courtship",
				body: [
					"Wildlife staff at Ranthambore spotted Sundari mating with T-25 in the Kachida-Tambahkan area of Ranthambore National Park. Next, she went in search of T-24 in the Singhaduar area, but as luck would have it, could not find him.",
					"On 24th January 2012, a forest guard named Shivraj reported having seen Sundari in the Rajbagh area of Ranthambore National Park. She was mating with T-28, an affair which continued for almost 4 days, after which she left his company.",
					"Sundari was spotted with her 3 cubs on 28th June 2012 by a tourist vehicle in Ranthambore. After a few days, she shifted her cubs to the Kachida area in the territory of T-25.",
				],
			},
		],
	},
	{
		slug: "dollar",
		name: "Dollar",
		tagline: "T-25 — The Famous Tiger of Ranthambore",
		excerpt:
			"T-25, aka Dollar, the aggressive tiger who chased tourist vehicles and reared orphaned cubs.",
		image: "/Home/tiger.jpg",
		imageAlt: "Tiger Dollar in Ranthambore National Park",
		meta: {
			code: "T-25",
			firstSeen: "2005",
			gender: "Male",
			identificationSign: "Dollar sign on his body",
			age: "15",
			zone: "Zone 4 & 5",
			status: "Dead",
		},
		sections: [
			{
				heading: "The Dollar Sign",
				body: "Dollar was given that name owing to the $ (Dollar) shape on his right flank stripe pattern. It was one of the things about him that captivated the tiger lovers. T-25 was also known as Zalim, or the cruel one, since he was known to be unusually aggressive, both in terms of expanding his territory and his personal nature. He was often found to display his aggressive behaviour towards the tourist vehicles, growling and sending shivers down the tourists' spines. However, he was loved by everybody enormously.",
			},
			{
				heading: "Direct Descendant of Machali",
				body: "Born in 2007 or 2008, Dollar was one of the three male cubs born to the Lahpur-Nagdi tigress T-22 and father Jhumroo (T-20), and is the direct descendent of Ranthambore's matriarch — Machali.",
			},
			{
				heading: "Cruel by Name, Affectionate by Nature",
				body: [
					"Zalim, or T-25, surprised everybody when he reared two female cubs who were orphaned in February 2011, when their mother, T-5, succumbed to an intestinal illness. This kind act on his part took everybody by surprise since he wasn't known to engage in acts of kindness.",
					"The two female cubs, Bina-1 and Bina-2, had lost their mother, T-5, in 2011, to an infection when they were just five months old. Zalim would stay close to them all the time, share his meals with them and even teach them hunting and survival skills. Between 2011 to 2013, Zalim and the cubs had grown really close to each other.",
				],
			},
			{
				heading: "Death of T-25 aka Zalim",
				body: "Zalim died in January 2020, presumably after being involved in a territorial fight with T-66, a 10 year old male tiger, who along with the Tigress T-54, resided in the same area. Post mortem revealed the crushed bones of his head along with the presence of canine marks.",
			},
		],
	},
	{
		slug: "sitara",
		name: "Sitara",
		tagline: "T-28 — The Star of Ranthambore",
		excerpt:
			"T-28 aka Sitara, the star-marked tiger of Ranthambore, who loved acquiring new territories.",
		image: "/gallery/13.jpg",
		imageAlt: "Tiger Sitara in Ranthambore National Park",
		meta: {
			code: "T-28",
			firstSeen: "2008",
			gender: "Male",
			identificationSign: "Star on his head",
			age: "10 years",
			zone: "Zone 3 & Zone 4",
			status: "Dead",
		},
		sections: [
			{
				heading: "The Star Mark",
				body: "T-28 aka Sitara was called so because of a five point star mark on his left eye. Tiger lovers would remember Sitara because of his memorable fight with Machali, Lady of the Lakes, in early 2009. During early 2006, T-27, the Gilai Sagar female mated with T-2 tiger, the X-male, and gave birth to two male cubs, T-28 and T-29.",
			},
			{
				heading: "First Noticed by Tourists in 2008",
				body: "These territories were not accessible to the visitors as they consisted of a few motorable tracks. But later, during early winters of 2008, Sitara was first noticed by the tourists around the area of Berda. He soon extended his range up to Lakkara and also covered the lake area of Jhalara and Nalghati. He became one of the few dominant males of Ranthambore and acquired the areas of Nalghati, Jhalara, almost the entire Mandoop plateau, Lakkarda and the three lakes (Padam Talao, Raj Bagh and Malik Talao).",
			},
			{
				heading: "Sitara and Machali — Fight Over Territory",
				body: [
					"The twist in the tale began when the famous Machali, T-16, and her two daughters, T-17 and T-19, acquired one of his territories, and the legendary war between the two occurred in early 2009, the war which favored Sitara and ultimately he was the winner. Slowly Machali made her peace with Sitara and both made space for each other.",
					"The interesting part of Star Male's story of reigning is that he ultimately mated two of Machali's daughters, T-17 and T-19. Machali finally acknowledged Sitara's supremacy when T-16 killed a large male Sambar deer and the rowdy Star male snatched her kill, leading to the legendary fight.",
				],
			},
			{
				heading: "Death of T-28 aka Sitara",
				body: "As fate would have it, the Star Male aka T-28, died in Ranthambore Tiger Reserve on 20th March 2018. Its body was found in a field in Chhan village in Khandar area. Post mortem revealed that it was suffering from gastric torsion in the upper region.",
			},
		],
	},
	{
		slug: "machali",
		name: "Machali",
		tagline: "T-16 — The Legend Tigress of Ranthambore",
		excerpt:
			"The fascinating story of Machali, the tigress who was the Queen of Ranthambore.",
		image: "/Home/machli.jpg",
		imageAlt: "Machali, the legendary tigress of Ranthambore",
		meta: {
			code: "T-16",
			firstSeen: "1996",
			gender: "Female",
			identificationSign: "Fish mark on her face",
			age: "–",
			zone: "Zone 2, 3, 4, 5",
			status: "Dead",
		},
		sections: [
			{
				heading: "Lady of the Lake",
				body: [
					"Once the pride of Ranthambore, Machli (T-16) alias Lady of the Lake, was the royal tigress who passed away on 18th August 2016. Labeled as the most photographed tigress in the world, Machli was not only beautiful but also a powerful entity who had a strong hold over her territory which included the Ranthambhore's palace, lakes, and forts of Ranthambore.",
					"With domes and chattris as a shelter, and lakes under her control, one can easily figure out Machli's dominance over Ranthambore. This 350 square mile area of Machli's territory was the largest area of the park, and also the most beautiful one.",
				],
			},
			{
				heading: "What Made Machali T-16 Stand Out?",
				body: [
					"Amongst the 62 tigers of Ranthambore, what made Machli so special was her comfort level with the humans, and how she held lensmen in awe of her grace. She was smart too. At times, she used to take the advantage of the tourist's vehicles to stalk and hunt. Her genes have spread far and wide across the area.",
					"Machli, literal meaning fish, was named for the fish-shaped mark on the left ear of her face. Since birth during the monsoon months of 1997, Machli had been a dominating cub. At the age of two, this ferocious tigress started hunting on her own.",
				],
			},
			{
				heading: "Powerful, Dominating and Ferocious",
				body: "Despite being a female tigress, she always had a dominating nature and a powerful personality that at times used to overpower even the male tigers. Her ferocity was something that she was born with. One of these tales was her fight with the 14-foot long crocodile that even created history. It has been described as a historic encounter by the spectators.",
			},
			{
				heading: "Death of Machali, the Queen of Ranthambore",
				body: "However, around five years before her death, age started taking a toll on Machli and she started losing territory gradually. She even lost her teeth too by the time of her death. She was cremated according to the National Tiger Conservation Authority Protocols (NTCA). The legend of Machali will continue to live on.",
			},
			{
				heading: "Interesting Facts About Tigress Machali",
				body: [
					"Tigress Queen of Ranthambore, Lady of the Lakes and Crocodile Killer — titles she received during her life.",
					"Between 1998 and 2009, the extraordinary popularity of Machli helped the Indian government earn nearly US$100 million.",
					"She won the Lifetime Achievement Award due to her contribution to conservation and tourist attraction.",
					"The Indian Government issued a commemorative postal cover and stamp to honor Machli.",
					"Machli passed away at the age of 20, making her the world's oldest-surviving tigress in the wild.",
					"A film on Machali, The World's Most Famous Tiger, won the National Award at the 66th National Film Awards.",
				],
			},
		],
	},
];

export function getTigerBySlug(slug: string): TigerProfile | undefined {
	return TIGERS.find((tiger) => tiger.slug === slug);
}

export function getOtherTigers(slug: string): TigerProfile[] {
	return TIGERS.filter((tiger) => tiger.slug !== slug);
}

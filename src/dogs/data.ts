type Edge = {
    point: number,
    weight: number
}

interface IDogs {
    data: {
        name: string,
        imageURL: string,
    },
    edges: Edge[]
}

export const dogs: IDogs[] = [
    // 0 Alaskan Malamute
    {
        data: {
            name: "Alaskan Malamute",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/09151112/Alaskan-Malamute-walking-in-a-field1.jpg"
        },
        edges: [
            {
                point: 32,
                weight: 68.2
            },
            {
                point: 68,
                weight: 23.0
            },
            {
                point: 25,
                weight: 8.7
            }
        ]
    },

    // 1 Airedale Terrier
    {
        data: {
            name: "Airedale Terrier",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/02165956/Airedale-Terrier-standing-stacked-outdoors.jpg"
        },
        edges: [
            // Giant Schnauzer
            {
                point: 33,
                weight: 4.7
            },

            // Nova Scotia Duck Tolling Retrievier
            {
                point: 51,
                weight: 1.8
            },

            // Sheltie 
            {
                point: 65,
                weight: 1.3
            },

            // Irish Terrier 
            {
                point: 48,
                weight: 3.7
            },

            // Yorkshire Terrier 
            {
                point: 88,
                weight: 3.6
            },

            // Black Russian Terrier 
            {
                point: 14,
                weight: 8
            },

            // Australian Sheperd
            {
                point: 6,
                weight: 1.1   
            },

            // Golden Retriever
            {
                point: 31,
                weight: 1.3  
            },

            // West Highland white terrier
            {
                point: 82,
                weight: 1.7  
            },

            // Toy Manchester Terrier
            {
                point: 78,
                weight: 1.5  
            },

            // Kelpie
            {
                point: 44,
                weight: 1.3  
            },
        ]
    },

    // 2 Akita
    {
        data: {
            name: "Akita",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06153939/Akita-head-portrait-outdoors1.jpg"
        },
        edges: [
            // Japanese Chin
            {
                point: 42,
                weight: 2
            },

            // Shiba inu
            {
                point: 42,
                weight: 2
            },
        ]
    },

    // 3 American Stanfordshire Terrier
    {
        data: {
            name: "American Stanfordshire Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/AmStaff.01.jpg"
        },
        edges: [
            // Boxer
            {
                point: 17,
                weight: 2.2
            },

            // Bulldog
            {
                point: 19,
                weight: 3.2
            },

            // Bull terrier
            {
                point: 20,
                weight: 5.7
            },

            // Dogue de Bourdeaux
            {
                point: 28,
                weight: 1.3
            },

            // Stafordshire bull terrier
            {
                point: 70,
                weight: 3.9
            },
        ]
    },

    // 4 American Cocker Spaniel
    {
        data: {
            name: "American Cocker Spaniel",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Cocker-Spaniel-on-White-12.jpg"
        },
        edges: [
            // Nova Scotia Duck Tolling Retriever
            {
                point: 50,
                weight: 3.5
            },
        ]
    },

    // 5 Terrier americano sem pelo
    {
        data: {
            name: "Terrier americano sem pelo",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/American-Hairless-Terrier-standing-in-the-grass-on-lead.jpg"
        },
        edges: [
            // Chihuahua
            {
                point: 24,
                weight: 1.2
            },

            // Toy Manchester Terrier
            {
                point: 78,
                weight: 2.1
            },

            // Parson Russel Terrier
            {
                point: 52,
                weight: 1.2
            },

            // Toy Fox Terrier
            {
                point: 77,
                weight: 2.2
            },

            // Jack Russel Terrier
            {
                point: 41,
                weight: 1.5
            },

            // Wirefox Terrier
            {
                point: 84,
                weight: 3.5
            },
        ]
    },

    // 6 Pastor Australiano
    {
        data: {
            name: "Pastor Australiano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Australian-Shepherd.1.jpg"
        },
        edges: [
            // Pastor alemão
            {
                point: 51,
                weight: 2.2
            },

            // Pembroke welsh corgi
            {
                point: 54,
                weight: 1.8
            },

            // Chinook
            {
                point: 25,
                weight: 2.7   
            },

            // Kelpie
            {
                point: 44,
                weight: 2.4  
            },

            // Airedale Terrier
            {
                point: 1,
                weight: 1.1  
            },

            // Shelti
            {
                point: 65,
                weight: 6.9
            },

            // Collie
            {
                point: 26,
                weight: 13.8
            },
            
             // Cardigan Welsh Corgi
             {
                point: 23,
                weight: 2.2
            },
        ]
    },

    // 7 Basset Hound
    {
        data: {
            name: "Basset Hound",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07200501/Basset-Hound-standing-in-the-garden.jpg"
        },
        edges: [
            // Redbone coonhound
            {
                point: 61,
                weight: 3.2
            },

            // Fox hound
            {
                point: 30,
                weight: 3.1
            },

            // Beagle
            {
                point: 8,
                weight: 3.2
            },
        ]
    },
    
    // 8 Beagle
    {
        data: {
            name: "Beagle",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Beagle-standing-in-profile-looking-up-in-the-yard.jpg"
        },
        edges: [
            // Redbone coonhound
            {
                point: 61,
                weight: 12.5
            },

            // Fox hound
            {
                point: 30,
                weight: 13.6
            },

            // Basset Hound
            {
                point: 7,
                weight: 3.2
            },
        ]
    },  

    // 9 Pastor-belga Malinois
    {   
        data: {
            name: "Pastor-belga Malinois",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Belgian-Malinois.1.jpg"
        },
        edges: [
            // Pastor Alemão
            {
                point: 52,
                weight: 9.1
            },

            // Pastor Belga tervuren
            {
                point: 10,
                weight: 20.3
            },

            // Chinook
            {
                point: 25,
                weight: 2.4
            },

            // Xoloitzcuintle 
            {
                point: 86,
                weight: 1
            },

            // Pastor da Picardia 
            {
                point: 12,
                weight: 6
            },
        ]
    },

    // 10 Pastor-belga Teruven
    {
        data: {
            name: "Pastor-belga Teruven",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Belgian-Tervuren.3.jpg"
        },
        edges: [
            // Pastor-belga Malinois
            {
                point: 9,
                weight: 20.3
            },

            // Pastor da Picardia 
            {
                point: 12,
                weight: 5
            },
        ]
    },

    // 11 Bearded Collie
    {
        data: {
            name: "Bearded Collie",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Bearded-Collie-standing-in-the-grass.jpg"
        },
        edges: [
            // Pembroke Welsh Corgi
            {
                point: 54,
                weight: 4.3
            },

            // Chinook
            {
                point: 25,
                weight: 1.2
            },

            // Retriever da Nova Escócia
            {
                point: 50,
                weight: 1.2
            },

            // Sheltie
            {
                point: 65,
                weight: 6.1
            },

            // Collie
            {
                point: 26,
                weight: 14.1
            },

            // Pastor Australiano
            {
                point: 6,
                weight: 3.3
            },

            // Cardigan Welsh Corgi
            {
                point: 23,
                weight: 4.2
            },

            // Kelpie
            {
                point: 44,
                weight: 8.9
            },
        ]
    },

    // 12 Pastor da Picardia
    {
        data: {
            name: "Pastor da Picardia",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Berger-Picard-standing-in-a-field.jpg"
        },
        edges: [
            // Pastor Alemão
            {
                point: 52,
                weight: 29.1
            },

            // Xoloitzcuntli 
            {
                point: 86,
                weight: 3.7
            },

            // Chinook 
            {
                point: 25,
                weight: 10.3
            },

            // Leonberger 
            {
                point: 46,
                weight: 3.5
            },

            // Doberman 
            {
                point: 87,
                weight: 1.3
            },

            // Cão de água português     
            {
                point: 59,
                weight: 3
            },
        ]
    },

    // 13 Benese mountain
    {
        data: {
            name: "Bernese mountain",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Bernese-Mountain-Dog-head-portrait-outdoors.jpg"
        },
        edges: [
            // São Bernard
            {
                point: 63,
                weight: 7.1
            },

            // Terrier preto da Rússia
            {
                point: 14,
                weight: 1.3
            },

            // Leonberger
            {
                point: 46,
                weight: 2.7
            },
        ]
    },

    // 14 Terrier preto da Rússia
    {
        data: {
            name: "Terrier preto da Rússia",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Black-Russian-Terrier-standing-outdoors.jpg"
        },
        edges: [
            // Rottweiler
            {
                point: 62,
                weight: 43
            },

            // Schnauzer Gigante
            {
                point: 62,
                weight: 32
            },

            // Leonberger
            {
                point: 46,
                weight: 2.5
            },

            // Airedale Terrier
            {
                point: 1,
                weight: 8
            },

            // Doberman
            {
                point: 87,
                weight: 1
            },  

            // Bernese Mountain
            {
                point: 13,
                weight: 1.3
            },  
        ]
    },

    // 15 Boerboel
    {
        data: {
            name: "Boerboel",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Boerboel-walking-in-the-grass.jpg"
        },
        edges: [
            // Boxer
            {
                point: 17,
                weight: 6.4
            },

            // Cane Corso
            {
                point: 21,
                weight: 2.7
            },

            // Bulldog  
            {
                point: 19,
                weight: 9.6
            },

            // Rottweiler   
            {
                point: 62,
                weight: 1.2
            },

            // Dogue de Bordeaux   
            {
                point: 28,
                weight: 1.5
            },
        ]
    },

    // 16 Border terrier
    {
        data: {
            name: "Border Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Border-Terrier-running.jpg"
        },
        edges: [
            // Wirefox terrier
            {
                point: 84,
                weight: 1.2
            },

            // Terrier Irlandês
            {
                point: 39,
                weight: 1.2
            },

            // Parson Russel Terrier
            {
                point: 52,
                weight: 12.3
            },

            // Manchester Terrier
            {
                point: 58,
                weight: 3.4
            },

            // Jack Russel Terrier
            {
                point: 41,
                weight: 5.9
            },

            // Pug
            {
                point: 60,
                weight: 1.1
            },
        ]
    },

    // 17 Boxer
    {
        data: {
            name: "Boxer",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Boxer-head-portrait-outdoors.jpg"
        },
        edges: [
            // American Stanfordshire Terrier
            {
                point: 3,
                weight: 2.2
            },

            // Dogue de Bordeaux
            {
                point: 28,
                weight: 11
            },

            // Terrier Irlandês
            {
                point: 39,
                weight: 1 
            },

            // Boerboel
            {
                point: 15,
                weight: 6.4
            },

            // Bulldog
            {
                point: 18,
                weight: 7.1
            },

            // Cane Corso
            {
                point: 21,
                weight: 14.1
            },

            // Stanfordshire bull terrier
            {
                point: 70,
                weight: 1.3
            },
        ]
    },

    // 18 Britanny
    {
        data: {
            name: "Britanny",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Brittany-in-profile-outdoors.jpg"
        },
        edges: [
            // Spinone italiano
            {
                point: 69,
                weight: 3.3
            },

            // Gordon Setter
            {
                point: 34,
                weight: 3.3
            },

            // Viszla
            {
                point: 79,
                weight: 1.1
            },

            // Setter Irlandês
            {
                point: 37,
                weight: 2.5
            },

            //  Griffon de aponte de pelo duro 
            {
                point: 85,
                weight: 1.6
            },
        ]
    },

    // 19 Bulldog
    {
        data: {
            name: "Bulldog",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Bulldog-standing-in-the-grass.jpg"
        },
        edges: [
            // Cane Corso
            {
                point: 21,
                weight: 1.9
            },

            // Dogue de Bordeaux
            {
                point: 28,
                weight: 4
            },

            // Boxer
            {
                point: 17,
                weight: 7.1
            },

            // Boerboel
            {
                point: 15,
                weight: 9.6
            },

            // American Stanfordshire Terrier
            {
                point: 3,
                weight: 3.2
            },

            // Bull terrier
            {
                point: 20,
                weight: 1.7
            },

            // Kelpie
            {
                point: 44,
                weight: 1.3
            },

            // Stanfordshire Bull terrier
            {
                point: 70,
                weight: 3.3
            },
        ]
    },

    // 20 Bull Terrier
    {
        data: {
            name: "Bull Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Bull-Terrier-laying-in-the-grass.jpg"
        },
        edges: [
            // Manchester Terrier
            {
                point: 78,
                weight: 1
            },

            // Bulldog
            {
                point: 78,
                weight: 1
            },

            // American Stanfordshire Terrier
            {
                point: 3,
                weight: 5.7
            },

            // Stanfordshire Bull Terrier
            {
                point: 70,
                weight: 8.3
            },
        ]
    },

    // 21 Cane Corso
    {
        data: {
            name: "Cane Corso",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Cane-Corso.jpg"
        },
        edges: [
            // Bulldog
            {
                point: 19,
                weight: 1.9
            },

            // São Bernard
            {
                point: 63,
                weight: 1.8
            },

            // Rottweiler
            {
                point: 62,
                weight: 2.3
            },

            // Dogue de Bordeaux
            {
                point: 28,
                weight: 2.8
            },

            // Boxer
            {
                point: 17,
                weight: 14.1
            },

            // Boerboel
            {
                point: 15,
                weight: 2.7
            },
        ]
    },

    // 22 Chow Chow
    {
        data: {
            name: "Chow Chow",
            imageURL: "https://www.akc.org/wp-content/uploads/2018/04/chow-chow-closeup-portrait-drooling.jpg"
        },
        edges: [
            // Eurasier
            {
                point: 29,
                weight: 42.5
            },
        ]
    },

    // 23 Cardigan welsh corgi
    {
        data: {
            name: "Cardigan welsh corgi",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Cardigan-Welsh-Corgi1.jpg"
        },
        edges: [
            // Pastor australiano
            {
                point: 6,
                weight: 2.2
            },

            // Kelpie
            {
                point: 44,
                weight: 4.3
            },

            // Pembroke welsh corgi
            {
                point: 54,
                weight: 16.8
            },

            // Bearded Collie
            {
                point: 11,
                weight: 4.2
            },

            // Collie
            {
                point: 26,
                weight: 8.5
            },

            // Sheltie
            {
                point: 65,
                weight: 5.9
            },
        ]
    },

    // 24 Chihuahua
    {
        data: {
            name: "Chihuahua",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Chihuahua-at-the-2016-AKC-National-Championship.jpg"
        },
        edges: [
            // Terrier americano sem pelo
            {
                point: 5,
                weight: 1.2
            },

            // Cristado Chinês
            {
                point: 89,
                weight: 4.4
            },
        ]
    },
    
    // 25 Chinook
    {
        data: {
            name: "Chinook",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Chinook-closeup.jpg"
        },
        edges: [
            // Malamute do Alasca
            {
                point: 0,
                weight: 8.7
            },

            // Cão da Groelândia
            {
                point: 32,
                weight: 16.8
            },

            // Bearded Collie
            {
                point: 11,
                weight: 1.2
            },

            // Xoloitzcuntli
            {
                point: 86,
                weight: 3.2
            },

            // Collie
            {
                point: 26,
                weight: 6.2
            },

            // Pastor belga de malinois
            {
                point: 9,
                weight: 2.4
            },

            // Leonberger
            {
                point: 46,
                weight: 2.2
            },

            // Sheltie
            {
                point: 65,
                weight: 2.4
            },

            // Pastor australinao
            {
                point: 6,
                weight: 2.7
            },

            // Pastor alemão
            {
                point: 51,
                weight: 28.7
            },

            // Pastor da Picardia
            {
                point: 12,
                weight: 10.3
            },

            // Husky siberiano
            {
                point: 68,
                weight: 2
            },
        ]
    },

    // 26 Collie
    {
        data: {
            name: "Collie",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Collie-standing-in-a-field.jpg"
        },
        edges: [
            // Bearded Collie
            {
                point: 11,
                weight: 14.1
            },

            // Pembroke Welsh Corgi
            {
                point: 54,
                weight: 9.4
            },

            // Retriever da Nova Escócia
            {
                point: 50,
                weight: 5.7
            },

            // Chinook
            {
                point: 25,
                weight: 6.1
            },

            // Sheltie
            {
                point: 65,
                weight: 60.7
            },

            // Xoloitzcuntli
            {
                point: 86   ,
                weight: 1.1
            },

            // Pastor Australiano
            {
                point: 6,
                weight: 13.8
            },

            // Cardigan Welsh corgi
            {
                point: 23,
                weight: 8.5
            },

            // Kelpie
            {
                point: 44,
                weight: 3
            },
        ]
    },
    
    // 27 Retriever do pelo encaracolado
    {
        data: {
            name: "Retriever do pelo encaracolado",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Curly-Coated-Retriever-laying-down-in-a-field.jpg"
        },
        edges: [
            // Golden Retriever
            {
                point: 32,
                weight: 2.5
            },

            // Labrador
            {
                point: 45,
                weight: 1.2
            },

            // Setter Irlandês
            {
                point: 39,
                weight: 1.1
            },
        ]
    },

    // 28 Dogue de Bordeaux
    {
        data: {
            name: "Dogue de Bordeaux",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Dogue-de-Bordeaux-on-white-05.jpg"
        },
        edges: [
            // São Bernard
            {
                point: 63,
                weight: 3
            },

            // Boxer
            {
                point: 17,
                weight: 11
            },

            // Boerboel
            {
                point: 15,
                weight: 1.5
            },

            // Bulldog
            {
                point: 19,
                weight: 4
            },

            // American Stanfordshire terrier
            {
                point: 3,
                weight: 1.3
            },

            // Cane Corso
            {
                point: 21,
                weight: 2.8
            },

            // Stanfordshire bull terrier
            {
                point: 70,
                weight: 1.9
            },
        ]
    },

    // 29 Eurasier
    {
        data: {
            name: "Eurasier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Eurasier.1.jpg"
        },
        edges: [
            // Chow Chow
            {
                point: 22,
                weight: 42.5
            },

            // Keenshond
            {
                point: 43,
                weight: 7.6
            },
        ]
    },

    // 30 Fox Hound
    {
        data: {
            name: "Fox hound",
            imageURL: "https://www.akc.org/wp-content/uploads/2018/06/american-foxhound-pair-looking-up.jpg"
        },
        edges: [
            // Basset hound
            {
                point: 7,
                weight: 3.1
            },

            // Beagle
            {
                point: 8,
                weight: 13.6
            },

            // Redbone coonhound
            {
                point: 61,
                weight: 9.5
            },
        ]
    },

    // 31 Golden Retriever
    {
        data: {
            name: "Golden Retriever",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Slide-11.jpg"
        },
        edges: [
            // labrador
            {
                point: 45,
                weight: 7.2
            },

            // Setter Irlandês
            {
                point: 37,
                weight: 2.4
            },

            // Retriever do pelo encaracolado
            {
                point: 27,
                weight: 2.5
            },

            // Airedale Terrier
            {
                point: 1,
                weight: 1.3
            },
        ]
    },

    // 32 Cão da Groelândia
    {
        data: {
            name: "Cão da Groelândia",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Greenland_dog_upernavik_2007-06-02_sample.jpg/220px-Greenland_dog_upernavik_2007-06-02_sample.jpg"
        },
        edges: [
            // Malamute do Alasca
            {
                point: 0,
                weight: 68.2
            },

            // Husky Siberiano
            {
                point: 68,
                weight: 27.2
            },

            // Chinook
            {
                point: 25,
                weight: 16.8
            },
        ]
    },

    // 33 Schanauzer Gigante
    {
        data: {
            name: "Schanauzer Gigante",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Giant-Schanuzer-standing-in-a-field.jpg"
        },
        edges: [
            // Airedale Terrier
            {
                point: 1,
                weight: 4.7
            },

            // Doberman
            {
                point: 87,
                weight: 4.8
            },

            // Terrier preto da Rússia
            {
                point: 14,
                weight: 20.3
            },

            // Schnauzer
            {
                point: 73,
                weight: 4.6
            },
        ]
    },

    // 34 Gordon Setter
    {
        data: {
            name: "Gordon Setter",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Gordon-Setter.3.jpg"
        },
        edges: [
            // Setter Irlandês
            {
                point: 37,
                weight: 7.6
            },

            // Britanny
            {
                point: 18,
                weight: 3.3
            },

            // Vizsla
            {
                point: 79,
                weight: 2.7
            },

            // Griffon de aponte de pelo duro
            {
                point: 85,
                weight: 1.7
            },

            // Spinone Italiano 
            {
                point: 69,
                weight: 1.9
            },
        ]
    },

    // 35 Greyhound
    {
        data: {
            name: "Greyhound",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Greyhound-running.jpg"
        },
        edges: [
            // Italian greyhound
            {
                point: 28,
                weight: 2.7
            },

            // Whippet
            {
                point: 83,
                weight: 13.8
            },
        ]
    },

    // 36 Havanese
    {
        data: {
            name: "Havanese",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Havanese-standing-outdoors.jpg"
        },
        edges: [
            // Maltese
            {
                point: 48,
                weight: 29.6
            },

            // Poodle
            {
                point: 57,
                weight: 2.9
            },
        ]
    },

    // 37 Irish Setter
    {
        data: {
            name: "Setter irlandês",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Irish-Setter-on-point-in-a-field.jpg"
        },
        edges: [
            // Britanny
            {
                point: 18,
                weight: 2.5
            },

            // Gordon setter
            {
                point: 34,
                weight: 7.6
            },

            // Spinone Italiano
            {
                point: 69,
                weight: 1.1
            },

            // Retriever do pelo encaracolado
            {
                point: 27,
                weight: 1.1
            },

            // Vizsla
            {
                point: 79,
                weight: 1.7
            },

            // Golden retriever
            {
                point: 31,
                weight: 2.4
            },
        ]
    },

    // 38 Greyhound italiano
    {
        data: {
            name: "Greyhound Italiano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Italian-Greyhound-running-in-a-competition.jpg"
        },
        edges: [
            // Greyhound
            {
                point: 35,
                weight: 2.7
            },

            // Manchester Terrier
            {
                point: 78,
                weight: 1.2
            },

            // Whippet
            {
                point: 83,
                weight: 5.3
            },
        ]
    },

    // 39 Terrier Irlandês
    {
        data: {
            name: "Terrier Irlandês",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Irish-Terrier-head-portrait-standing-outdoors.jpg"
        },
        edges: [
            // Jack Russel Terrier
            {
                point: 41,
                weight: 1.3
            },

            // Yorkshire
            {
                point: 88,
                weight: 1.7
            },

            // Border terrier
            {
                point: 16,
                weight: 1.2
            },

            // Airedale terrier
            {
                point: 1,
                weight: 3.7
            },

            // Manchester Terrier
            {
                point: 78,
                weight: 1.9
            },

            // Boxer
            {
                point: 17,
                weight: 1
            },
        ]
    },

    // 40 Cão islandês
    {
        data: {
            name: "Cão islandês",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Icelandic-Sitting.jpg"
        },
        edges: [
            // Keeshond
            {
                point: 43,
                weight: 1.6
            },

            // Manchester Terrier
            {
                point: 78,
                weight: 1.6
            },

            // Vallhund Sueco
            {
                point: 75,
                weight: 2
            },
        ]
    },

    // 41 Jack Hussel Terrier
    {
        data: {
            name: "Jack Hussel Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Russell-Terrier-running-across-the-grass-in-the-Fall.jpg"
        },
        edges: [
            // Wirefox Terrier
            {
                point: 84,
                weight: 19.4
            },

            // Border Terrier
            {
                point: 16,
                weight: 5.9
            },

            // Parson Russel Terrier
            {
                point: 52,
                weight: 12.2
            },

            // Terrier americano sem pelo
            {
                point: 5,
                weight: 1.5
            },

            // Toy fox terrier
            {
                point: 77,
                weight: 1.8
            },

            // Setter Irlandês
            {
                point: 37,
                weight: 1.3
            },

            // Manchester Terrier
            {
                point: 78,
                weight: 1.8
            },
        ]
    },

    // 42 Chin japonês
    {
        data: {
            name: "Chin japonÊs",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Japanese-Chin-standing-outdoors.jpg"
        },
        edges: [
            // Akita
            {
                point: 2,
                weight: 2
            },

            // Shih Tzu
            {
                point: 67,
                weight: 3.1
            },

            // Pekingese
            {
                point: 55,
                weight: 5.7
            },

            // Shiba Inu
            {
                point: 66,
                weight: 2.8
            },

            // Lhasa Apso
            {
                point: 47,
                weight: 3.8
            },
        ]
    },

    // 43 Keenshond
    {
        data: {
            name: "Keenshond",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Keeshond-exploring-in-the-backyard.jpg"
        },
        edges: [
            // Cão islandês de pastoreio
            {
                point: 40,
                weight: 1.6
            },

            // Lulu da pomerânia
            {
                point: 58,
                weight: 2.3
            },

            // Eurasier
            {
                point: 58,
                weight: 7.6
            },

            // Schanauzer
            {
                point: 73,
                weight: 1.2
            },

            // Schipperke
            {
                point: 74,
                weight: 1.2
            },

            // Vallhund sueco
            {
                point: 75,
                weight: 2.5
            },
        ]
    },

    // 44 Kelpie
    {
        data: {
            name: "Kelpie",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Australian-Kelpie.jpg"
        },
        edges: [
            // Pastor australiano
            {
                point: 6,
                weight: 2.4
            },

            // Pembroki welsh corgi
            {
                point: 44,
                weight: 3.1
            },

            // Bulldog
            {
                point: 19,
                weight: 1.3
            },

            // Airedale Terrier
            {
                point: 1,
                weight: 1.3
            },

            // Bearded Collie
            {
                point: 11,
                weight: 8.9
            },

            // Sheltie
            {
                point: 65,
                weight: 3.6
            },

            // Cardigan Welsh Corgi
            {
                point: 23,
                weight: 4.3
            },

            // Collie
            {
                point: 26,
                weight: 3
            },
        ]
    },

    // 45 Labrador
    {
        data: {
            name: "Labrador",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Labrador-Retriever-swimming-with-a-decoy.jpg"
        },
        edges: [
            // Golden Retriever
            {
                point: 6,
                weight: 7.2
            },

            // Retriever de pelo encaracolado
            {
                point: 27,
                weight: 1.2
            },

            // Retriever da Nova Escócia
            {
                point: 50,
                weight: 1.8
            },
        ]
    },

    // 46 Leonberger
    {
        data: {
            name: "Leonberger",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Leonberger-standing-in-a-field.jpg"
        },
        edges: [
            // São bernard
            {
                point: 63,
                weight: 9.6
            },

            // Terrier preto da Rússia
            {
                point: 14,
                weight: 2.5
            },

            // Pastor Alemão
            {
                point: 51,
                weight: 5.1
            },

            // Pastor da Picardia
            {
                point: 12,
                weight: 3.5
            },

            // Chinook
            {
                point: 25,
                weight: 2.2
            },

            // Rottweiler
            {
                point: 62,
                weight: 5.2
            },

            // Bernese Mountain
            {
                point: 13,
                weight: 2.7
            },
        ]
    },

    // 47 Lhasa Apso
    {
        data: {
            name: "Lhasa Apso",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Lhasa-Apso-standing-in-the-garden.jpg"
        },
        edges: [
            // Chin Japonês
            {
                point: 42,
                weight: 3.8
            },

            // Spaniel Tibetano
            {
                point: 76,
                weight: 12.2
            },

            // Pug
            {
                point: 60,
                weight: 1
            },

            // Shih Tzu
            {
                point: 67,
                weight: 33.6
            },

            // Pekingese
            {
                point: 55,
                weight: 25.8
            },
        ]
    },

    // 48 Maltese
    {
        data: {
            name: "Maltese",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Maltese-sitting-in-the-grass.jpg"
        },
        edges: [
            // Havanese
            {
                point: 36,
                weight: 29.6
            },

            // Poodle
            {
                point: 57,
                weight: 1.2
            },
        ]
    },

    // 49 Norfolk Terrier
    {
        data: {
            name: "Norfolk Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Norfolk-Terrier-sitting-in-the-grass.1.jpg"
        },
        edges: [
            // Terrier Irlandês
            {
                point: 39,
                weight: 2.9
            },

            // Wirefox Terrier
            {
                point: 84,
                weight: 1.5
            },

            // Yorkshire
            {
                point: 88,
                weight: 6
            },

            // West Highland terrier
            {
                point: 82,
                weight: 5.9
            },
        ]
    },

    // 50 Retriever da Nova Escócia
    {
        data: {
            name: "Retriever da Nova Escócia",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Nova-Scotia-Duck-Tolling-Retriever-slide.jpg"
        },
        edges: [
            // Bearded collie
            {
                point: 11,
                weight: 2.9
            },

            // Labrador
            {
                point: 11,
                weight: 1.6
            },

            // Sheltie
            {
                point: 65,
                weight: 3.8
            },

            // Collie
            {
                point: 26,
                weight: 5.7
            },

            // American Cocker Spaniel
            {
                point: 4,
                weight: 3.5
            },

            // Pug
            {
                point: 60,
                weight: 2.2
            },

            // Airedale Terrier
            {
                point: 1,
                weight: 1.8
            },
        ]
    },

    // 51 Pastor Alemão
    {
        data: {
            name: "Pastor Alemão",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-Dog-running.jpg"
        },
        edges: [
            // Pastor da Picardia
            {
                point: 12,
                weight: 29.1
            },

            // Chinook
            {
                point: 12,
                weight: 28.7
            },

            // Pastor Australiano
            {
                point: 6,
                weight: 2.2
            },
            
            // Doberman
            {
                point: 87,
                weight: 2.2
            },

            // Pastor belga de Malinois
            {
                point: 9,
                weight: 9.1
            },

            // Leonberger
            {
                point: 46,
                weight: 5.1
            },

            // Xoloitzcuintli 
            {
                point: 86,
                weight: 14.4  
            },

            // Cão de agua português 
            {
                point: 59,
                weight: 5.7 
            },
        ]
    },

    // 52 Parson Russel Terrier
    {
        data: {
            name: "Parson Russel Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Parson-Russell-Terrier-laying-down-indoors.jpg"
        },
        edges: [
            // Border Terrier
            {
                point: 16,
                weight: 12.3
            },

            // Terrier americano sem pelo
            {
                point: 5,
                weight: 1.2
            },  

            // Manchester Terrier
            {
                point: 78,
                weight: 2.5
            },  

            // Jack Russel Terrier
            {
                point: 41,
                weight: 12.2
            },

            // Wirefox terrier
            {
                point: 84,
                weight: 16.9
            },

            // Toy fox terrier
            {
                point: 77,
                weight: 1.5
            },

            // Stanfordshire bull terrier
            {
                point: 70,
                weight: 1.5
            },
        ]
    },

    // 53 Papillon
    {
        data: {
            name: "Papillon",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Papillon-laying-in-the-grass-outdoors.20200513145032873.jpg"
        },
        edges: [
            // Pug
            {
                point: 60,
                weight: 1.8
            },
        ]
    },

    // 54 Pembroki Welsh corgi
    {
        data: {
            name: "Pembroki Welsh corgi",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"
        },
        edges: [
            // Kelpie
            {
                point: 44,
                weight: 3.1
            },

            // Sheltie
            {
                point: 65,
                weight: 6.3
            },  

            // Pastor Australiano
            {
                point: 6,
                weight: 1.8
            },

            // Cardigan Welsh Corgi
            {
                point: 23,
                weight: 16.8
            },

            // Bearded collie
            {
                point: 11,
                weight: 4.3
            },

            // Collie
            {
                point: 25,
                weight: 9.6
            },

            // Wirefox Terrier
            {
                point: 84,
                weight: 1.8
            },
        ]
    },

    // 55 Pekingese
    {
        data: {
            name: "Pekingese",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Pekingese-standing-in-the-grass.jpg"
        },
        edges: [
            // Lhasa Apso
            {
                point: 47,
                weight: 25.8
            },

            // Pug
            {
                point: 60,
                weight: 1.8
            },

            // Cristado Chinês
            {
                point: 89,
                weight: 2.6   
            },

            // Shih Tzu
            {
                point: 67,
                weight: 36.8   
            },

            // Chin japonês
            {
                point: 42,
                weight: 5.7  
            },

            // Spaniel Tibetano
            {
                point: 76,
                weight: 30.2
            },
        ]
    },

    // 56 Pharaoh hound
    {
        data: {
            name: "Pharaoh hound",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Pharaoh-Hound-laying-down-in-profile.jpg"
        },
        edges: [
            // Whippet
            {
                point: 83,
                weight: 1.8
            },
        ]
    },

    // 57 Poodle
    {
        data: {
            name: "Poodle",
            imageURL: "https://www.akc.org/wp-content/uploads/2018/05/Groomed-Toy-Poodle-standing-outdoors.jpg"
        },
        edges: [
            // Maltese
            {
                point: 48,
                weight: 1.2
            },

            // Havanese
            {
                point: 36,
                weight: 2.9
            },

            // Poodle normal    
            {
                point: 71,
                weight: 5.1
            },

            // Poodle miniatura    
            {
                point: 72,
                weight: 35.1
            },
        ]
    },

    // 58 Lulu da pomerânia
    {
        data: {
            name: "Lulu da Pomerânia",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Pomeranian-On-White-01.jpg"
        },
        edges: [
            // Volpino
            {
                point: 80,
                weight: 5.7
            },

            // Keeshond
            {
                point: 43,
                weight: 2.3
            },

            // Schnauzer
            {
                point: 73,
                weight: 1.8
            },

            // Pug
            {
                point: 60,
                weight: 1.1
            },

            // Schippperke
            {
                point: 74,
                weight: 1.1
            },
        ]
    },

    // 59 Cão de água português
    {
        data: {
            name: "Cão de água português",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Portuguese-Water-Dog-On-White-03.jpg"
        },
        edges: [
            // Pastor da Picardia
            {
                point: 12,
                weight: 3
            },

            // Pastor alemão
            {
                point: 51,
                weight: 5.7
            },

            // Poodle normal
            {
                point: 71,
                weight: 1.8
            },

            // Poodle miniatura
            {
                point: 72,
                weight: 1.5
            },
        ]
    },

    // 60 Pug
    {
        data: {
            name: "Pug",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Black-Pug-sitting-in-a-field-of-dandelions.jpg"
        },
        edges: [
            // Border terrier
            {
                point: 16,
                weight: 1.1
            },

            // Retriever da Nova Escócia
            {
                point: 50,
                weight: 2.2
            },

            // Lulu da pomerânia
            {
                point: 58,
                weight: 1.1
            },

            // Shih Tzu
            {
                point: 67,
                weight: 1.6
            },

            // Cristado chinês
            {
                point: 89,
                weight: 1.6
            },

            // Pappillon
            {
                point: 53,
                weight: 1.8
            },

            // Lhasa Apso
            {
                point: 47,
                weight: 1
            },

            // Schanauzer
            {
                point: 73,
                weight: 1.2
            },

            // Pekingese
            {
                point: 55,
                weight: 1.8
            },

            // Schipperke
            {
                point: 74,
                weight: 2.6
            },
        ]
    },

    // 61 Redbone coonhound
    {
        data: {
            name: "Redbone coonhound",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Redbone-Coonhound-wading-through-water.jpg"
        },
        edges: [
            // Basset hound
            {
                point: 7,
                weight: 3.2
            },

            // Fox hound
            {
                point: 29,
                weight: 9.5
            },

            // Beagle
            {
                point: 8,
                weight: 12.5
            },

            // Manchester Terrier
            {
                point: 78,
                weight: 1.3
            },
        ]
    },

    // 62 Rottweiler
    {
        data: {
            name: "Rottweiler",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Rottweiler-lying-on-a-park-bench.jpg"
        },
        edges: [
            // São Bernard
            {
                point: 63,
                weight: 1.8
            },

            // Cane Corso
            {
                point: 21,
                weight: 2.3
            },

            // Leonberger
            {
                point: 46,
                weight: 5.2
            },

            // Terrier preto da Rússia
            {
                point: 46,
                weight: 43
            },

            // Boerboel
            {
                point: 15,
                weight: 1.2
            },
        ]
    },

    // 63 São Bernard
    {
        data: {
            name: "São Bernard",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Saint-Bernard-standing-in-profile-outdoors.jpg"
        },
        edges: [
            // Bernese mountain
            {
                point: 13,
                weight: 7.1
            },

            // Cane Corso
            {
                point: 21,
                weight: 1.8
            },

            // Leonberger
            {
                point: 46,
                weight: 9.6
            },

            // Rottweiler
            {
                point: 62,
                weight: 1.8
            },

            // Dogue de Bordeaux
            {
                point: 28,
                weight: 3
            },
        ]
    },

    // 64 Salsicha
    {
        data: {
            name: "Salsicha",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Dachshund-standing-outdoors.jpg"
        },
        edges: [
        ]
    },

    // 65 Sheltie
    {
        data: {
            name: "Sheltie",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Shetland-Sheepdog-face.jpg"
        },
        edges: [
            // Collie
            {
                point: 26,
                weight: 60.7
            }, 
            
            // Pastor australiano
            {
                point: 6,
                weight: 6.9
            },  

            // Cardigan Welsh Corgi
            {
                point: 23,
                weight: 65.9
            },

            // Kelpie
            {
                point: 44,
                weight: 3.6
            },

            // Bearded Collie
            {
                point: 11,
                weight: 6.1
            },

            // Pembroki Welsh corgi
            {
                point: 54,
                weight: 6.3
            },

            // Chinook
            {
                point: 25,
                weight: 2.4
            },

            // Retriever da Nova Escócia
            {
                point: 50,
                weight: 5.8
            },

            // Airedale Terrier
            {
                point: 1,
                weight: 1.3
            },
        ]
    },

    // 66 Shiba Inu
    {
        data: {
            name: "Shiba Inu",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-running-in-the-snow-in-the-winter.jpg"
        },
        edges: [
            // Akita
            {
                point: 2,
                weight: 1.8
            }, 

            // Chin japonês
            {
                point: 42,
                weight: 2.8
            }, 
        ]
    },

    // 67 Shih Tzu
    {
        data: {
            name: "Shih Tzu",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Shih-Tzu-in-the-grass.jpg"
        },
        edges: [
            // Pekingese
            {
                point: 55,
                weight: 36.8,
            },

            // Spinel Tibetano
            {
                point: 55,
                weight: 18.4,
            },

            // Pug
            {
                point: 60,
                weight: 1.6,
            },

            // Lhasa Apso
            {
                point: 47,
                weight: 33.6,
            },

            // Chin japonês
            {
                point: 42,
                weight: 3.1,
            },
        ]
    },
    
    // 68 Husky siberiano
    {
        data: {
            name: "Husky siberiano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg"
        },
        edges: [
            // Malamute do Alasca
            {
                point: 0,
                weight: 23,
            },

            // Chinook
            {
                point: 25,
                weight: 2,
            },

            // Cão da Groelândia
            {
                point: 40,
                weight: 27.2,
            },
        ]
    },

    // 69 Spinone italiano
    {
        data: {
            name: "Spinone italiano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Spinone-Italiano-exploring-in-a-forest.jpg"
        },
        edges: [
            // Griffon de aponte de pelo duro
            {
                point: 85,
                weight: 3,
            },

            // Gordon Setter
            {
                point: 34,
                weight: 1.9,
            },

            // Britanny
            {
                point: 18,
                weight: 3.3,
            },

            // Setter irlandês
            {
                point: 37,
                weight: 1.1,
            },
        ]
    },

    // 70 Stanfordshire bull terrier
    {
        data: {
            name: "Stanfordshire bull terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Staffordshire-Bull-Terrier-standing-outdoors.jpg"
        },
        edges: [
            // American Stanfordshire terrier
            {
                point: 3,
                weight: 4.9,
            },

            // Dogue de Bordeaux
            {
                point: 28,
                weight: 1.4,
            },

            // Bull terrier
            {
                point: 20,
                weight: 8.3,
            },

            // Parson Russel terrier
            {
                point: 52,
                weight: 1.5,
            },

            // Bulldog
            {
                point: 19,
                weight: 3.3,
            },

            // Boxer
            {
                point: 17,
                weight: 3.3,
            },
        ]
    },

    // 71 Poodle normal
    {
        data: {
            name: "Poodle normal",
            imageURL: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/24134701/Standard-Poodle-standing-outdoors-at-the-beach.jpg"
        },
        edges: [
            // Cão de água de português
            {
                point: 59,
                weight: 1.8,
            },

            // Poodle
            {
                point: 57,
                weight: 5.1,
            },

            // Poodle miniatura
            {
                point: 71,
                weight: 7.7,
            },
        ]
    },

    // 72 Poodle miniatura
    {
        data: {
            name: "Poodle miniatura",
            imageURL: "https://www.akc.org/wp-content/uploads/2019/05/Mini-Poodle.jpg"
        },
        edges: [
            // Cão de água de português
            {
                point: 59,
                weight: 1.5,
            },

            // Poodle
            {
                point: 57,
                weight: 35.1,
            },

            // Poodle normal
            {
                point: 71,
                weight: 7.7,
            },

            // Havanese
            {
                point: 36,
                weight: 2.5,
            },
        ]
    },

    // 73 Schnauzer
    {
        data: {
            name: "Schnauzer",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Standard-Schnauzer-laying-outdoors.jpg"
        },
        edges: [
            // Lulu da pomerânia
            {
                point: 58,
                weight: 1.8,
            },

            // Keeshond
            {
                point: 43,
                weight: 1.2,
            },

            // Schnauzer Gigante
            {
                point: 32,
                weight: 4.6,
            },

            // Pug
            {
                point: 60,
                weight: 1.2,
            },
        ]
    },

    // 74 Schipperke
    {
        data: {
            name: "Schipperke",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Schipperke-standing-in-a-field.jpg"
        },
        edges: [
            // Lulu da pomerânia
            {
                point: 58,
                weight: 1.1,
            },

            // Keeshond
            {
                point: 43,
                weight: 1.2,
            },

            // Pug
            {
                point: 60,
                weight: 2.6,
            },
        ]
    },

    // 75 Vallhund sueco
    {
        data: {
            name: "Vallhund sueco",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Swedish-Vallhund-standing-in-a-grassy-field.jpg"
        },
        edges: [
            // Keeshond
            {
                point: 43,
                weight: 2.5,
            },

            // Cão islandês de pastoreio
            {
                point: 32,
                weight: 2,
            },
        ]
    },

    // 76 Spaniel Tibetano
    {
        data: {
            name: "Spaniel Tibetano",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Tibetan-Spaniel-laying-down-outdoors.jpg"
        },
        edges: [
            // Pekingese
            {
                point: 55,
                weight: 30.2,
            },

            // Chin japonês
            {
                point: 42,
                weight: 2.3,
            },

            // Shih Tzu
            {
                point: 67,
                weight: 18.4,
            },

            // Lhasa Apso
            {
                point: 47,
                weight: 12.2,
            },
        ]
    },
    
    // 77 Toy fox Terrier
    {
        data: {
            name: "Toy fox Terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Toy-Fox-Terrier-running-outdoors.jpg"
        },
        edges: [
            // Parson Russel Terrier
            {
                point: 52,
                weight: 1.5,
            },

            // Terrier americano sem pelo
            {
                point: 5,
                weight: 2.2,
            },

            // Manchester Terrier
            {
                point: 78,
                weight: 1.6,
            },

            // Jack Russel Terrier
            {
                point: 41,
                weight: 1.8,
            },

            // Wirefox Terrier
            {
                point: 84,
                weight: 5,
            },
        ]
    },

    // 78 Manchester terrier
    {
        data: {
            name: "Manchester terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2018/04/ANC2016-MeetTheBreeds-1310134.jpg"
        },
        edges: [
            // Airedale Terrier
            {
                point: 1,
                weight: 1.5,
            },

            // Terrier irlandês
            {
                point: 39,
                weight: 1.9,
            },

            // Redbone coonhound
            {
                point: 61,
                weight: 1.3,
            },

            // Bull terrier
            {
                point: 20,
                weight: 1,
            },

            // Whippet
            {
                point: 83,
                weight: 1.1,
            },

            // Doberman
            {
                point: 87,
                weight: 4.5,
            },

            // Greyhound italiano
            {
                point: 38,
                weight: 1.2,
            },

            // Parson Russel Terrier
            {
                point: 52,
                weight: 2.5,
            },

            // Toy fox terrier
            {
                point: 77,
                weight: 1.6,
            },

            // Terrier americano sem pelo
            {
                point: 5,
                weight: 2.1,
            },

            // Jack Russel Terrier
            {
                point: 41,
                weight: 1.8,
            },

            // Wirefox Terrier
            {
                point: 84,
                weight: 3.2,
            },

            // Cão islandês de pastoreio
            {
                point: 40,
                weight: 1.6,
            },

            // Border Terrier
            {
                point: 16,
                weight: 3.4,
            },

            // Cristado chinês  
            {
                point: 89,
                weight: 1.1,
            },
        ]
    },

    // 79 Vizsla
    {
        data: {
            name: "Vizsla",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Vizsla-sniffing-in-a-harvested-field.jpg"
        },
        edges: [
            // Setter irlandês
            {
                point: 37,
                weight: 1.7,
            },

            // Griffon de aponte de pelo duro
            {
                point: 85,
                weight: 2,
            },

            // Britanny
            {
                point: 18,
                weight: 1.1,
            },

            // Gordon setter
            {
                point: 34,
                weight: 2.7,
            },
        ]
    },

    // 80 Volpino
    {
        data: {
            name: "Volpino",
            imageURL: "https://www.akc.org/wp-content/uploads/2021/03/Volpino-Italiano-laying-down-in-the-grass.jpg"
        },
        edges: [
            // Lulu da pomerânia
            {
                point: 58,
                weight: 5.7,
            },
        ]
    },

    // 81 Weimaraner
    {
        data: {
            name: "Weimaraner",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Weimaraner-head-close-up.jpg"
        },
        edges: [
            // Griffon de aponte de pelo duro
            {
                point: 85,
                weight: 1.5,
            },
        ]
    },

    // 82 West highland terrier
    {
        data: {
            name: "West highland terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/West-Highland-White-Terrier-on-White-01.jpg"
        },
        edges: [
            // Norfolk terrier
            {
                point: 49,
                weight: 5.9,
            },

            // Airedale terrier
            {
                point: 1,
                weight: 1.7,
            },
        ]
    },

    // 83 Whippet
    {
        data: {
            name: "Whippet",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Whippet-running-on-the-beach.jpg"
        },
        edges: [
            // Greyhond italiano
            {
                point: 38,
                weight: 5.3,
            },

            // Greyhond
            {
                point: 35,
                weight: 13.8,
            },

            // Manchester terrier
            {
                point: 78,
                weight: 1.1,
            },

            // Pharaoh Hound
            {
                point: 56,
                weight: 1.8,
            },
        ]
    },

    // 84 Wirefox terrier
    {
        data: {
            name: "Wirefox terrier",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Wire-Fox-Terrier.1.jpg"
        },
        edges: [
            // Toy fox terrier
            {
                point: 77,
                weight: 5,
            },

            // Terrier americano sem pelo
            {
                point: 5,
                weight: 3.7,
            },

            // Jack Hussel Terrier
            {
                point: 41,
                weight: 19.4,
            },

            // Parson Hussel Terrier
            {
                point: 52,
                weight: 16.9,
            },

            // Border Terrier
            {
                point: 16,
                weight: 1.2,
            },

            // Norfolk Terrier
            {
                point: 49,
                weight: 1.5,
            },

            // Manchester Terrier
            {
                point: 78,
                weight: 3.2,
            },

            // Pembroki Welsh Corgi
            {
                point: 54,
                weight: 1.8,
            },
        ]
    },

    // 85 Griffon de aponte de pelo duro
    {
        data: {
            name: "Griffon de aponte de pelo duro",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Wirehaired-Pointing-Griffon-laying-in-a-field.jpg"
        },
        edges: [
            // Britanny
            {
                point: 18,
                weight: 1.6,
            },

            // Weimaraner
            {
                point: 81,
                weight: 1.5,
            },

            // Spinone italiano
            {
                point: 69,
                weight: 3,
            },

            // Gordon Setter
            {
                point: 34,
                weight: 1.7,
            },

            // Vizsla
            {
                point: 79,
                weight: 2,
            },
        ]
    },

    // 86 Xoloitzcuintli
    {
        data: {
            name: "Xoloitzcuintli",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Xoloitzcuintli-on-White-06.jpg"
        },
        edges: [
            // Doberman
            {
                point: 87,
                weight: 3.2,
            },

            // Chinook
            {
                point: 25,
                weight: 3.2,
            },

            // Pastor alemão
            {
                point: 51,
                weight: 14.4,
            },

            // Pastor da Picardia
            {
                point: 12,
                weight: 3.7,
            },

            // Collie
            {
                point: 26,
                weight: 1.1,
            },

            // Pastor belga de Malinois
            {
                point: 9,
                weight: 1,
            },
        ]
    },

    // 87 Doberman
    {
        data: {
            name: "Doberman",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-enjoying-the-sunshine-outdoors.jpg"
        },
        edges: [
            // Manchester terrier
            {
                point: 78,
                weight: 4.5,
            },

            // Xoloitzcuintli
            {
                point: 86,
                weight: 3.2,
            },

            // Pastor alemão
            {
                point: 51,
                weight: 2.2,
            },

            // Pastor da Picardia
            {
                point: 12,
                weight: 1.3,
            },

            // Terrier preto da Rússia
            {
                point: 14,
                weight: 1.3,
            },

            // Schnauzer gigante
            {
                point: 33,
                weight: 3.8,
            },
        ]
    },

    // 88 Yorkshire
    {
        data: {
            name: "Yorkshire",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Yorkshire-Terrier-On-White-06.jpg"
        },
        edges: [
            // Terrier irlandês
            {
                point: 39,
                weight: 1.7,
            },

            // Airedale terrier
            {
                point: 1,
                weight: 3.6,
            },

            // Norfolk terrier
            {
                point: 49,
                weight: 6,
            },
        ]
    },

    // 89 Cristado chinês
    {
        data: {
            name: "Cristado chinês",
            imageURL: "https://www.akc.org/wp-content/uploads/2017/11/Chinese-Crested-On-White-03.jpg"
        },
        edges: [
            // Pekingese
            {
                point: 55,
                weight: 2.6,
            },

            // Pug
            {
                point: 60,
                weight: 1.6,
            },

            // Manchester terrier
            {
                point: 78,
                weight: 1.1,
            },

            // Chihuahua
            {
                point: 24,
                weight: 4.4,
            },
        ]
    },
]
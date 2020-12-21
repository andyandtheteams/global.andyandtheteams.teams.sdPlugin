# AndyandtheTeams - Stream Deck Microsoft Teams Plug-in Demonstrator

The `AndyandtheTeams - Stream Deck Microsoft Teams Plug-in Demonstrator` was created to prove that Elgatos Stream Decks hardware can be used to start Microsoft Teams chats. It is based on the Elgato `Stream Deck Plugin Template` and requires Stream Deck 4.1 or later.

# Description

`AndyandtheTeams - Stream Deck Microsoft Teams Plug-in Demonstrator` is a plug-in with the following functionality:
- Add Stream Deck buttons for a specific user (email address).
- When a button is clicked, the plug-in opens a Browser URL that forwards instructions to Microsoft Teams and it will start a chat conversation with the specified user. You can quickly create a voice or video call from there as well.

## Limitations of this demonstrator:

This plug-in is not an entirely written code, but I developed it until it was usable for me. If you are interested in supporting this project, please let me know.
Limitations:
- User picture from the global address book needs to be downloaded and added manually (one time task per button)
- The "@" character can not be added to the input field. Please use the predefined one. Any idea why this is the case, please contact me.
- No multi-user group chats.
- Icons do not show the online status of the user

# Installation instructions
- Install Stream Deck Hardware and it´s software
- Download this plug-in from the `Release` folder. It is named global.andyandtheteams.streamDeckPlugin
- Double click the plug-in, and your stream deck software will ask if you want to install the plug-in. Click `Install`
- In the right menu go to "Custom" (named differently in other languages. For example, in German: "Benutzerdefiniert")
- Select "Teams Plug-in" and pull it to a button.
- Type in the Microsoft Teams user Email address that you want to chat with.
- Save it
- Optionally select another image from the menu. You can download pictures from the global address book at https://outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=john.doe@acme.com&UA=0&size=HR64x64 (replace email address)
- Optionally enter a title and select the color white for it

# To create a plug-in from source code

- Download the full project and edit it as needed
- Download the Elgato DistributionTool Elgato https://developer.elgato.com/documentation/stream-deck/sdk/exporting-your-plugin/
- Remove the Plug-in from Stream Deck Software
- rm .\Release\global.andyandtheteams.teams.streamDeckPlugin
- .\DistributionTool.exe -b -i .\Sources\global.andyandtheteams.teams.sdPlugin\ -o Release
- start .\Release\global.andyandtheteams.teams.streamDeckPlugin    
(Double click the file would work as well)
- Stream Deck Software starts and let you install the plug-in

# To create a plug-in from source code
- The best way how to learn how the code works is to watch the following video: https://www.youtube.com/watch?v=N_WbCLG6dwA 
- Thanks a lot to  `The Polyglot Developer` for creating this video. It helped a lot to understand how the Stream Deck Plug-in works.

# License
- Please see license file
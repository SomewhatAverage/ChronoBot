const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
console.log("I am ready!");
client.user.setActivity(`on ${client.guilds.size} servers`);
});

const prefix = "!";

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var msg = message.content.toUpperCase();
  if (!message.content.startsWith(prefix)) return;
  
  if (command === 'setmod') {
    if (args[0] === undefined) {
      message.channel.send("Please enter a role to set as moderator!");
    }
    let testRole = message.guild.roles.find("name, args[0]");
    if (testRole == null) {
      message.channel.send("Please enter a valid role to set as moderator!");
    } else {
      let modRole = message.guild.roles.find("name, args[0]")
      }
  }
  
  if (command === "clear") {
    let x = args[0];
	  message.channel.bulkDelete(x);
  } else
  
  if (command === 'mute') {
    let modRole = message.guild.roles.find("name", "Mod");
    if(message.member.roles.has(modRole.id)) {
      let role = message.guild.roles.find("name", "Muted");
      let member = message.mentions.members.first();
      member.addRole(role).catch(console.error);
      message.channel.send("Member Muted.");
    } else {
      return message.reply("You don't have the permission to mute members.");
    }
  } else
  
  if (command === 'unmute') {
    let modRole = message.guild.roles.find("name", "Mod");
    if(message.member.roles.has(modRole.id)) {
      let role = message.guild.roles.find("name", "Muted");
      let member = message.mentions.members.first();
      member.removeRole(role).catch(console.error);
      message.channel.send("Member Unmuted.");
    } else {
      return message.reply("You don't have the permission to unmute members.");
    }
  } else
  
  if (command === 'kick') {
    let modRole = message.guild.roles.find("name", "Mod");
    if(message.member.roles.has(modRole.id)) { 
      var member= message.mentions.members.first();
      member.kick().then((member) => {
        message.channel.send("Member Kicked.");
      }).catch(() => {
        message.channel.send("Failed to kick member.");
      });
    } else {
      return message.reply("You don't have the permission to kick members.");
    }
  } else
  
  if (command === 'ban') {
    let modRole = message.guild.roles.find("name", "Mod");
	  if(message.member.roles.has(modRole.id)) { 
      var member= message.mentions.members.first();
      member.ban().then((member) => {
        message.channel.send("Member Banned.");
      }).catch(() => {
        message.channel.send("Failed to ban member.");
      });
    } else {
      return message.reply("You don't have the permission to kick members.");
    }   
  } else
  
	if (command === '8ball') {
	  if (args[0] == undefined) {
	    message.channel.send("Please ask a question!");
	  } else {
	  if (args[0] != undefined) {
	    var randomNum = Math.floor(Math.random() * (20 - 1)) + 1;
	    switch(randomNum) {
	      case 1:
  	    message.channel.send("Definitely not.");
	      break;
	      case 2:
	      message.channel.send("If you're lucky, yes.");
  	    break;
	      case 3:
      	message.channel.send("Possibly, but only possibly.");
      	break;
      	case 4:
      	message.channel.send("Fair chance.");
      	break; 
      	case 5:
      	message.channel.send("If you work for it, it could happen.");
	      break;
      	case 6:
	      message.channel.send("Maybe.");
	      break;
      	case 7:
       	message.channel.send("You could. I'll have to check back on that one.");
      	break;
        case 8:
      	message.channel.send("Probable. Very probable.");
      	break;
	      case 9:
      	message.channel.send("No to you. Yes to your best friend.");
      	break;
      	case 10:
      	message.channel.send("Yes, yes, definitely yes!");
      	break;
      	case 11:
      	message.channel.send("Yes, yes, definitely no.");
	      break;
	      case 12:
	      message.channel.send("Of course not. What were you thinking?");
	      break;
	      case 13:
      	message.channel.send("Yes, it will!");
       	break;
      	case 14:
      	message.channel.send("Error 978: Did not wish to respond. Please never try again.");
	      break;
      	case 15:
      	message.channel.send("It is true. I shall command it.");
      	break;
      	case 16:
      	message.channel.send("When conditions are in favor.");
      	break;
      	case 17:
      	message.channel.send("No, and never!");
      	break;
      	case 18:
      	message.channel.send("Once in a blue moon, sadly.");
	      break;
      	case 19:
      	message.channel.send("My vision is clouded. It could be either.");
        break;
      	case 20:
      	message.channel.send("Yes, yes, YES!");
      	break;
    	}
	  }
    }
  }
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('410196865775304704').send('@everyone **<@' + member.user.id + '>** has joined the server!'); 
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('410196865775304704').send('@everyone **<@' + member.user.id + '>** has left the server.'); 
});

client.login(process.env.BOT_TOKEN);

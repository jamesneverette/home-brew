let default_user = {
    avatar: '',
    email: '',
    name: '',
    settings: {
        dark_theme: false,
        live_preview: false
    },
    uid: ''
}

export class User {
    constructor(user = default_user) {
        this.avatar = user.avatar;
        this.email = user.email;
        this.name = user.name;
        this.settings = user.settings;
        this.uid = user.uid;
    }
}
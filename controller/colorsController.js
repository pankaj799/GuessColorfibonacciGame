const Color =require('../model/colorSchema');

exports.getcolors= (req, res) =>{
    res.render("colorsInput", {
      viewTitle : "Enter Colors"
    });
};

exports.postcolors=(req, res, next)=>{
    const color = req.body.color;
    const value = req.body.val;
    const level = req.body.lev;
    Color.findOne({color : color, level: level, value: value})
        .then(users =>{
            if(users)
            {
                return res.redirect('/colorsSelection');
            }
            const colordata =new Color({
                color : color,
                level : level,
                value : value
            });
            return colordata.save()
                .then(result =>{
                    res.redirect('/colorsSelection');
                })
        })

        .catch(err => {console.log(err)})
        .catch(err => {console.log(err)})
};

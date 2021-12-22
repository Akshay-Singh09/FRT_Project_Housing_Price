endpoint=''
key=''

from flask import Flask, render_template, url_for
import json
import request

app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')
        
@app.route('/predict',methods = ['POST'])
def predict():
    if request.methods=='POST'
        loc=request.form['loc']
        room=(int)request.form['bhk']
        area=(int)request.form['area']
        new=(int)request.form['new']
        gym=(int)request.form['gym']
        lift=(int)request.form['lift']
        car=(int)request.form['car']
        maintain=(int)request.form['maintain']
        security=(int)request.form['security']
        play=(int)request.form['play']
        club=(int)request.form['club']
        intercom=(int)request.form['intercom']
        garden=(int)request.form['garden']
        indoor=(int)request.form['indoor']
        gas=(int)request.form['gas']
        jog=(int)request.form['jog']
        swim=(int)request.form['swim']

        x=[loc,room,area,new,gym,lift,car,maintain,security,play,club,intercom,garden,indoor,gas,jog,swim]

        header = {"Content-Type":"application/json", "Authorization":"Bearer " + key}

        response = requests.post(endpoint, input_json, headers=header)

        if response.status_code == 200:
            ans = json.loads(response.json())

        return render_template('result.html',ans)

if __name__=='__main__'
    app.run()
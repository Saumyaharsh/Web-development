#include<bits/stdc++.h>
using namespace std;
#define ll long long
ll min_idx(vector<ll>&v){
	ll n = v.size();
	ll mini = INT_MAX;
	ll mini_idx = -1;
	for(ll i = 0; i<n; i++){
		if(v[i]<=mini && v[i]>0){
			mini_idx = i;
		}


	}
	return mini_idx;
}
ll max_idx(vector<ll>&v){
	ll maxi = INT_MIN;
	ll n = v.size();
	ll maxi_idx = -1;
	for(ll i = 0;i<n; i++){
		if(v[i]>maxi){maxi = v[i];
			maxi_idx = i;}
	}
	return maxi_idx;
}
int main(){
	ll t;
	cin>>t;
	while(t--){
ll n;
ll k;
cin>>n>>k;
vector<ll>v;
for(ll i = 0; i<n; i++){
	ll x;
	cin>>x;
	v.push_back(x);
}
ll i = 0;
ll count = 1;
while(true){

	i+=1;
		//cout<<i<<endl;
if(i==1){
ll maxi = 	max_idx(v);

	v[maxi] = v[maxi]-1;
}
else if(i!=1){
ll mini_idx = min_idx(v);
cout<<mini_idx<<endl;
if(mini_idx!=-1){
	
	v[mini_idx] = v[mini_idx]-1;
}
}
auto a = minmax_element(v.begin(),v.end());
cout<<*a.second<<" "<<*a.first<<endl;
if(((*a.second)-(*a.first))<=k && (*a.second>0)){
	count++;
}
else if(((*a.second)-(*a.first))>k){
	if(count%2==0)cout<<"Jerry"<<endl;
	else cout<<"Tom"<<endl;
	break;
}
else if(*a.second==0){
if(count%2==0)cout<<"Jerry"<<endl;
	else cout<<"Tom"<<endl;
	break;
}




}















	}
	return 0;
}
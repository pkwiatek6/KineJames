<script lang="ts">
    import type { ICharacter } from "../Data/Character";
    export let Character: ICharacter;
    let TextWidth = "w-25"
    
    </script>
    <!--HTLM goes here-->
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text {TextWidth}" id="Name">Name:</span>
                        <input type="text" class="form-control" value="{Character.name}" aria-label="Character Name" aria-describedby="Name" />
                    </div>
                </div>

                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text  {TextWidth}" id="Player">Player:</span>
                        <input type="text" class="form-control" value="{Character.disUser}" aria-label="Player Name" aria-describedby="Player" readonly/>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text  {TextWidth}" id="Nature">Natrue:</span>
                        <input type="text" class="form-control" value="{Character.natrue}" aria-label="Nature" aria-describedby="Nature" />
                    </div>
                </div>
                
                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text  {TextWidth}" id="Demeanor">Demeanor:</span>
                        <input type="text" class="form-control" value="{Character.demeanor}" aria-label="Demeanor" aria-describedby="Demeanor" />
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="row">
                    <div class="input-group">
                        <span class="input-group-text  {TextWidth}" id="Clan">Clan:</span>
                        <input type="text" class="form-control" value="{Character.clan}" aria-label="Clan" aria-describedby="Clan" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <style>
        .row{
            margin-bottom: .5em;
        }
    </style>
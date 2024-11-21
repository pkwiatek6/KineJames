<script lang="ts">
  import {
      Button,
      Collapse,
      Modal,
      ModalBody,
      ModalFooter,
      ModalHeader,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      ButtonDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
  } from 'sveltestrap';

  import { GetAllChar, GetChar, UpdateChar } from '../Data/DatabaseActions';
  import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  import type { ICharacter } from '../Data/Character';

  export let userid: string;
  export let charPromise: Promise<ICharacter>;
  export let currCharData: ICharacter | null = null;

  let characterNames: string[] = [];
  
  let isOpen = false;

  // Load character names asynchronously
    async function loadCharacterNames() {
        try {
            characterNames = await GetAllChar(userid);
        } catch (error) {
            console.error('Error fetching character names:', error);
        }
    }
  loadCharacterNames();


  // Update character with async handling
  async function updateChar(name: string, userid: string) {
        try {
            charPromise = GetChar(name, userid);
            const resolvedChar = await charPromise;

            if (!resolvedChar) {
                console.error('Character data is null or undefined');
                return;
            }

            currCharData = resolvedChar;
        } catch (error) {
            console.error('Error updating character:', error);
        }
    }


  // Save character with async handling
  async function saveChar(charData: ICharacter) {
        if (!charData) {
            console.error('Cannot save null or undefined character data');
            return;
        }

        try {
            currCharData = await UpdateChar(charData);
        } catch (error) {
            console.error('Error saving character:', error);
        }
    }



    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }

  let open = false;
  const toggle = () => (open = !open);
</script>

  
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Kine James</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink>
              
            </NavLink>
        </NavItem>
          <ButtonDropdown inNavbar>
            <DropdownToggle caret color="primary">Characters</DropdownToggle>
            <DropdownMenu>
              {#await characterNames}
              <DropdownItem>Loading</DropdownItem>
              {:then names} 
                {#each names as name}
                  <DropdownItem on:click={() => updateChar(name, userid)} >{name}</DropdownItem>
                {/each}
              {:catch error}
                <DropdownItem>Error Loading: {error}</DropdownItem>
              {/await}
              
              <DropdownItem divider />
              <DropdownItem on:click={() => saveChar(currCharData)}>Save</DropdownItem>
              <DropdownItem on:click={toggle}>Login
                <Modal isOpen={open} fade={false} toggle={toggle}>
                  <ModalHeader {toggle}>Login to KineJames</ModalHeader>
                  <ModalBody>
                    <Form>
                      <FormGroup>
                        <Label for="userName"></Label>
                      </FormGroup>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" on:click={toggle}>Login</Button>
                    <Button color="secondary" on:click={toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
      </Nav>
    </Collapse>
  </Navbar>
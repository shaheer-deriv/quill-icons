import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderBlackWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderBlackWordmarkVerticalIcon',
  component: PartnersProductDerivCtraderBlackWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderBlackWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderBlackWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBrandDarkWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBrandDarkWordmarkVerticalIcon',
  component: DerivProductDerivP2pBrandDarkWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBrandDarkWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBrandDarkWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};

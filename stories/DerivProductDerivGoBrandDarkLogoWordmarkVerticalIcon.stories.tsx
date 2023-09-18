import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoBrandDarkLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoBrandDarkLogoWordmarkVerticalIcon',
  component: DerivProductDerivGoBrandDarkLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoBrandDarkLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoBrandDarkLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
